import React, { useCallback, useMemo } from 'react';
import {
  graphql,
  useLazyLoadQuery,
  usePreloadedQuery,
  useFragment,
} from 'react-relay/hooks';
import ErrorBoundary from './ErrorBoundary';
import useMutation from './useMutation';
import { useSpotifyAuth } from './authHelper';
import santa from './static/santa.gif';

const { Suspense } = React;

const AppGetMeQuery = graphql`
  query AppGetMeQuery {
    spotify {
      me {
        id
        ...App_profile
        ...App_player_profile
      }
    }
  }
`;

const AppGetChristmasSongQuery = graphql`
  query AppGetChristmasSongQuery {
    spotify {
      search(data: { query: "christmas" }) {
        tracks {
          id
          name
          album {
            images {
              url
            }
          }
        }
      }
    }
  }
`;

const AppPlaySongMutation = graphql`
  mutation AppPlaySongMutation($input: SpotifyStartPlayerInput!) {
    spotify {
      playTrack(input: $input) {
        player {
          isPlaying
          item {
            album {
              images {
                url
              }
            }
            name
            id
          }
        }
      }
    }
  }
`;

const AppResumeSongMutation = graphql`
  mutation AppResumeSongMutation {
    __typename
    spotify {
      resumePlayer {
        player {
          isPlaying
          item {
            album {
              images {
                url
              }
            }
            name
            id
          }
        }
      }
    }
  }
`;

const AppPauseSongMutation = graphql`
  mutation AppPauseSongMutation {
    __typename
    spotify {
      pausePlayer {
        player {
          isPlaying
          item {
            album {
              images {
                url
              }
            }
            name
            id
          }
        }
      }
    }
  }
`;

function UnauthorizedApp({ login }) {
  return (
    <div className="m-auto">
      <button
        type="button"
        className="inline-block text-sm uppercase px-4 py-2 rounded-full text-white hover:border-transparent hover:bg-green-700 mt-0 whitespace-no-wrap focus:outline-none"
        onClick={login}
      >
        Login to Spotify
      </button>
    </div>
  );
}

function UserDetails({ profile: profileRef }) {
  const profile = useFragment(
    graphql`
      fragment App_profile on SpotifyCurrentUserProfile {
        id
        displayName
        images {
          url
        }
      }
    `,
    profileRef,
  );

  return (
    <div className="flex items-center mr-6">
      <img
        className="h-8 w-8 rounded-full object-cover"
        src={profile.images[0].url}
        alt="Avatar"
      />
      <span className="text-sm font-medium ml-4">{profile.displayName}</span>
    </div>
  );
}

function Navigation({ profile: profileRef }) {
  return (
    <nav className="fixed z-10 top-0 shadow flex w-full items-center bg-white px-4 py-4">
      <UserDetails profile={profileRef} />
    </nav>
  );
}

function NoPlayer() {
  return (
    <div className="m-auto">
      <svg viewBox="0 0 662 222">
        <g fill="none" fillRule="evenodd">
          <rect
            fill="#000"
            opacity=".9"
            x=".895"
            y=".712"
            width="660.917"
            height="221.251"
            rx="25.529"
          />
          <path
            d="M627.743 109.92c.02 33.948-57.008 65.32-149.597 82.296-92.589 16.977-206.67 16.977-299.258 0C86.298 175.24 29.27 143.868 29.29 109.92c-.02-33.949 57.008-65.321 149.597-82.297s206.669-16.976 299.258 0c92.589 16.976 149.617 48.348 149.597 82.297z"
            stroke="#FFF"
            strokeWidth="9.764"
            fill="red"
            opacity=".9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fill="#FFF"
            fontFamily="Arial-BoldMT, Arial"
            fontSize="114"
            fontWeight="bold"
          >
            <tspan x="78.424" y="148.213">
              DANGER
            </tspan>
          </text>
        </g>
      </svg>
      <span>Please open spotify</span>
    </div>
  );
}

function Player({ profile: profileRef, preloadedQuery }) {
  const [isPlayingPending, playSong] = useMutation(AppPlaySongMutation);
  const [isPausingPending, pauseSong] = useMutation(AppPauseSongMutation);
  const [isResumingPending, resumeSong] = useMutation(AppResumeSongMutation);

  const songsData = usePreloadedQuery(AppGetChristmasSongQuery, preloadedQuery);

  const profile = useFragment(
    graphql`
      fragment App_player_profile on SpotifyCurrentUserProfile {
        id
        player {
          isPlaying
          item {
            id
            name
            album {
              images {
                url
              }
            }
          }
        }
      }
    `,
    profileRef,
  );

  if (!profile.player.item) {
    return <NoPlayer />;
  }

  function updateProfilePlayerPlayingStatus(store, profileId, playingStatus) {
    // Get a reference to the user profile
    const profileToUpdate = store.get(profileId);
    if (profileToUpdate == null) {
      return null;
    }

    // Find the current player
    const player = profileToUpdate.getLinkedRecord('player');
    if (player == null) {
      return null;
    }

    // set is playing to true
    player.setValue(playingStatus, 'isPlaying');

    return player;
  }

  const onPlay = useCallback(
    event => {
      event.preventDefault();

      const randomNumber = Math.round(Math.random() * 9);
      const itemIdToPlay = songsData.spotify.search.tracks[randomNumber].id;

      playSong({
        variables: {
          input: {
            trackIds: itemIdToPlay,
          },
        },
        /**
         * Relay merges data from the mutation result based on each response object's `id` value.
         * In this case, however, we also want to add the new comment to the list of issues: Relay
         * doesn't magically know where addComment.commentEdge should be added into the data graph.
         * So we define an `updater` function to imperatively update thee store.
         */
        updater: store => {
          const player = updateProfilePlayerPlayingStatus(
            store,
            profile.id,
            true,
          );

          if (!player) {
            // eslint-disable-next-line no-console
            console.log('Could not find a player');
            return;
          }

          // find new playing item
          const item = store.get(itemIdToPlay);
          if (item == null) {
            return;
          }

          // update playing item name and id
          player.setLinkedRecord(item, 'item');
        },
        optimisticUpdater: store => {
          const player = updateProfilePlayerPlayingStatus(
            store,
            profile.id,
            true,
          );

          if (!player) {
            // eslint-disable-next-line no-console
            console.log('Could not find a player');
            return;
          }

          // find new playing item
          const item = store.get(itemIdToPlay);
          if (item == null) {
            return;
          }

          // update playing item name and id
          player.setLinkedRecord(item, 'item');
        },
      });
    },
    [profile, songsData],
  );

  const onPause = useCallback(
    event => {
      event.preventDefault();
      pauseSong({
        variables: {},
        /**
         * Relay merges data from the mutation result based on each response object's `id` value.
         * In this case, however, we also want to add the new comment to the list of issues: Relay
         * doesn't magically know where addComment.commentEdge should be added into the data graph.
         * So we define an `updater` function to imperatively update thee store.
         */
        updater: store => {
          updateProfilePlayerPlayingStatus(store, profile.id, false);
        },
        optimisticUpdater: store => {
          updateProfilePlayerPlayingStatus(store, profile.id, false);
        },
      });
    },
    [profile],
  );

  const onResume = useCallback(
    event => {
      event.preventDefault();
      resumeSong({
        variables: {},
        /**
         * Relay merges data from the mutation result based on each response object's `id` value.
         * In this case, however, we also want to add the new comment to the list of issues: Relay
         * doesn't magically know where addComment.commentEdge should be added into the data graph.
         * So we define an `updater` function to imperatively update thee store.
         */
        updater: store => {
          updateProfilePlayerPlayingStatus(store, profile.id, true);
        },
        optimisticUpdater: store => {
          updateProfilePlayerPlayingStatus(store, profile.id, true);
        },
      });
    },
    [profile],
  );

  const {
    player: { isPlaying },
  } = profile;
  const playingCssAnimation = useMemo(
    () => (isPlaying ? 'animated-rotation' : ''),
    [isPlaying],
  );

  return (
    <div className="m-auto max-w-md">
      <div className="relative mx-3 -mb-6 pt-4 pb-10 bg-red-600 max-w-sm rounded-lg">
        <div className="flex-row pl-32 pr-4">
          <div className="text-gray-900 font-semibold">
            {profile.player.item.name}
          </div>
        </div>
      </div>
      <div className="relative h-24 sm:rounded-lg bg-white flex items-center shadow-2xl">
        <div className="relative ml-4 mb-16 mr-auto w-28 h-28 rounded-full bg-green-400 flex items-center overflow-hidden shadow-lg">
          <img
            className={`absolute top-0 bottom-0 left-0 right-0 ${playingCssAnimation}`}
            alt="Album Cover"
            src={profile.player.item.album.images[0].url}
          />
          <div className="z-10 rounded-full w-8 h-8 bg-white m-auto shadow-inner" />
        </div>
        <div className="flex items-center mr-3">
          <button
            type="button"
            className="hover:bg-gray-400 hover:text-white text-gray-400 rounded-lg p-3 focus:outline-none"
            onClick={onPlay}
            disabled={isPlayingPending}
          >
            <svg
              className="fill-current h-8 w-8 hover:text-white"
              viewBox="0 0 32 32"
            >
              <path d="M26.727 9.539l.002 12.923c0 1.594-1.774 2.548-3.104 1.668l-6.587-4.36v2.692c0 1.594-1.774 2.548-3.103 1.668l-9.766-6.463a2 2 0 010-3.336l9.764-6.46c1.33-.88 3.103.074 3.104 1.668v2.69l6.586-4.358c1.33-.88 3.104.074 3.104 1.668z" />
            </svg>
          </button>
          <button
            className="hover:bg-gray-400 hover:text-white text-gray-400 rounded-lg focus:outline-none"
            type="button"
            onClick={profile.player.isPlaying ? onPause : onResume}
            disabled={isPausingPending || isResumingPending}
          >
            {isPlaying ? (
              <svg className="fill-current h-16 w-16" viewBox="0 0 32 32">
                <path d="M10.354 7.535h1.735a2 2 0 012 2v12.93a2 2 0 01-2 2h-1.735a2 2 0 01-2-2V9.535a2 2 0 012-2zM19.911 7.535h1.735a2 2 0 012 2v12.93a2 2 0 01-2 2H19.91a2 2 0 01-2-2V9.535a2 2 0 012-2z" />
              </svg>
            ) : (
              <svg className="fill-current h-16 w-16" viewBox="0 0 32 32">
                <path d="M9.745 9.196c.014-1.583 1.775-2.524 3.098-1.654l10.185 6.69a2 2 0 01.011 3.335l-10.302 6.867c-1.336.89-3.123-.076-3.11-1.681l.118-13.557z" />
              </svg>
            )}
          </button>
          <button
            className="hover:bg-gray-400 hover:text-white text-gray-400 rounded-lg p-3 focus:outline-none"
            type="button"
            onClick={onPlay}
            disabled={isPlayingPending}
          >
            <svg className="fill-current h-8 w-8" viewBox="0 0 32 32">
              <path d="M9.027 22.463L9.025 9.538c0-1.595 1.774-2.548 3.104-1.668l6.587 4.36V9.538c0-1.595 1.774-2.548 3.104-1.668l9.766 6.464a2 2 0 010 3.335l-9.764 6.461c-1.33.88-3.104-.073-3.104-1.667v-2.691L12.13 24.13c-1.33.88-3.103-.073-3.103-1.667z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function AuthorizedApp({ preloadedQuery }) {
  const data = useLazyLoadQuery(AppGetMeQuery);

  return (
    <>
      <Navigation profile={data.spotify.me} />
      <Player profile={data.spotify.me} preloadedQuery={preloadedQuery} />
    </>
  );
}

function Loading() {
  return (
    <div className="flex w-full h-full bg-green-loading">
      <img className="m-auto w-64 h-48" src={santa} alt="Loading..." />
    </div>
  );
}

function App() {
  const { authorizationStatus, login, preloadedQuery } = useSpotifyAuth();

  switch (authorizationStatus) {
    case 'authorized':
      return (
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <AuthorizedApp preloadedQuery={preloadedQuery} />
          </ErrorBoundary>
        </Suspense>
      );
    case 'unauthorized':
      return <UnauthorizedApp login={login} />;
    default:
      return <Loading />;
  }
}

export default App;
