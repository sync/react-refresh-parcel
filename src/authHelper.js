import { useState, useEffect } from 'react';
import { preloadQuery } from 'react-relay/hooks';
import RelayEnvironment, { auth } from './RelayEnvironment';
import AppGetChristmasSongQuery from './__generated__/AppGetChristmasSongQuery.graphql';

let preloadedQuery = null;

// eslint-disable-next-line import/prefer-default-export
export function useSpotifyAuth() {
  const needsLoginService = 'spotify';
  const [authorizationStatus, setAuthorizationStatus] = useState('unknown');

  useEffect(() => {
    auth.isLoggedIn(needsLoginService).then(autorized => {
      setAuthorizationStatus(autorized ? 'authorized' : 'unauthorized');
    });
  }, []);

  const login = () => {
    return auth.login(needsLoginService).then(() => {
      return auth.isLoggedIn(needsLoginService).then(autorized => {
        setAuthorizationStatus(autorized ? 'authorized' : 'unauthorized');
      });
    });
  };

  // we might need these songs later
  if (!preloadedQuery && authorizationStatus === 'authorized') {
    preloadedQuery = preloadQuery(RelayEnvironment, AppGetChristmasSongQuery, {
      fetchPolicy: 'fetch-or-network',
    });
  }

  return {
    authorizationStatus,
    login,
    preloadedQuery,
  };
}
