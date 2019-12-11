/**
 * @flow
 * @relayHash a69113fb7179942c9cb57d8088c04270
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppResumeSongMutationVariables = {||};
export type AppResumeSongMutationResponse = {|
  +__typename: string,
  +spotify: {|
    +resumePlayer: ?{|
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
export type AppResumeSongMutation = {|
  variables: AppResumeSongMutationVariables,
  response: AppResumeSongMutationResponse,
|};
*/


/*
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
        "name": "resumePlayer",
        "storageKey": null,
        "args": null,
        "concreteType": "SpotifyResumePlayerResponsePayload",
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
    "name": "AppResumeSongMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppResumeSongMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AppResumeSongMutation",
    "id": null,
    "text": "mutation AppResumeSongMutation {\n  __typename\n  spotify {\n    resumePlayer {\n      player {\n        isPlaying\n        item {\n          album {\n            images {\n              url\n            }\n          }\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '39d3351faba682174ad973316196eeaa';
module.exports = node;
