/**
 * @flow
 * @relayHash 2c3283b27cb5b5ef56c0723c2b2d369a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppPauseSongMutationVariables = {||};
export type AppPauseSongMutationResponse = {|
  +__typename: string,
  +spotify: {|
    +pausePlayer: ?{|
      +player: ?{|
        +isPlaying: ?boolean,
        +item: ?{|
          +album: ?{|
            +images: ?$ReadOnlyArray<{|
              +url: ?string
            |}>
          |},
          +name: ?string,
          +id: ?string,
        |},
      |}
    |}
  |},
|};
export type AppPauseSongMutation = {|
  variables: AppPauseSongMutationVariables,
  response: AppPauseSongMutationResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "spotify",
    "storageKey": null,
    "args": null,
    "concreteType": "SpotifyMutationNamespace",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pausePlayer",
        "storageKey": null,
        "args": null,
        "concreteType": "SpotifyPausePlayerResponsePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "player",
            "storageKey": null,
            "args": null,
            "concreteType": "SpotifyPlayer",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isPlaying",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "item",
                "storageKey": null,
                "args": null,
                "concreteType": "SpotifyTrack",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "album",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SpotifySimplifiedAlbum",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "images",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SpotifyImage",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppPauseSongMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppPauseSongMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AppPauseSongMutation",
    "id": null,
    "text": "mutation AppPauseSongMutation {\n  __typename\n  spotify {\n    pausePlayer {\n      player {\n        isPlaying\n        item {\n          album {\n            images {\n              url\n            }\n          }\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba4e54e6212377709f8d63b250d4ba38';
module.exports = node;
