/**
 * @flow
 * @relayHash 2f496f6a0bc83f779c4008f396486d5d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SpotifyStartPlayerInput = {|
  positionMs?: ?number,
  trackIds: $ReadOnlyArray<string>,
  deviceId?: ?string,
|};
export type AppPlaySongMutationVariables = {|
  input: SpotifyStartPlayerInput
|};
export type AppPlaySongMutationResponse = {|
  +spotify: {|
    +playTrack: ?{|
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
  |}
|};
export type AppPlaySongMutation = {|
  variables: AppPlaySongMutationVariables,
  response: AppPlaySongMutationResponse,
|};
*/


/*
mutation AppPlaySongMutation(
  $input: SpotifyStartPlayerInput!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SpotifyStartPlayerInput!",
    "defaultValue": null
  }
],
v1 = [
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
        "name": "playTrack",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
          }
        ],
        "concreteType": "SpotifyStartPlayerTrackResponsePayload",
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
    "name": "AppPlaySongMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppPlaySongMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AppPlaySongMutation",
    "id": null,
    "text": "mutation AppPlaySongMutation(\n  $input: SpotifyStartPlayerInput!\n) {\n  spotify {\n    playTrack(input: $input) {\n      player {\n        isPlaying\n        item {\n          album {\n            images {\n              url\n            }\n          }\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e43acdd66d689e48cbb6a180cbeeb2f';
module.exports = node;
