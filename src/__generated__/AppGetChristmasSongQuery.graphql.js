/**
 * @flow
 * @relayHash 7967cc735b12bd8494fe52896a744bcd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppGetChristmasSongQueryVariables = {||};
export type AppGetChristmasSongQueryResponse = {|
  +spotify: {|
    +search: ?{|
      +tracks: ?$ReadOnlyArray<{|
        +id: ?string,
        +name: ?string,
        +album: ?{|
          +images: ?$ReadOnlyArray<{|
            +url: ?string
          |}>
        |},
      |}>
    |}
  |}
|};
export type AppGetChristmasSongQuery = {|
  variables: AppGetChristmasSongQueryVariables,
  response: AppGetChristmasSongQueryResponse,
|};
*/


/*
query AppGetChristmasSongQuery {
  spotify {
    search(data: {query: "christmas"}) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "spotify",
    "storageKey": null,
    "args": null,
    "concreteType": "SpotifyQuery",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "search",
        "storageKey": "search(data:{\"query\":\"christmas\"})",
        "args": [
          {
            "kind": "Literal",
            "name": "data",
            "value": {
              "query": "christmas"
            }
          }
        ],
        "concreteType": "SpotifySearchResults",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tracks",
            "storageKey": null,
            "args": null,
            "concreteType": "SpotifyTrack",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
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
    "name": "AppGetChristmasSongQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppGetChristmasSongQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppGetChristmasSongQuery",
    "id": null,
    "text": "query AppGetChristmasSongQuery {\n  spotify {\n    search(data: {query: \"christmas\"}) {\n      tracks {\n        id\n        name\n        album {\n          images {\n            url\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9493778e95c050978c16670b574578bb';
module.exports = node;
