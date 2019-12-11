/**
 * @flow
 * @relayHash 704fb090818472b252520d2f3d8c30f6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_player_profile$ref = any;
type App_profile$ref = any;
export type AppGetMeQueryVariables = {||};
export type AppGetMeQueryResponse = {|
  +spotify: {|
    +me: ?{|
      +id: ?string,
      +$fragmentRefs: App_profile$ref & App_player_profile$ref,
    |}
  |}
|};
export type AppGetMeQuery = {|
  variables: AppGetMeQueryVariables,
  response: AppGetMeQueryResponse,
|};
*/


/*
query AppGetMeQuery {
  spotify {
    me {
      id
      ...App_profile
      ...App_player_profile
    }
  }
}

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

fragment App_profile on SpotifyCurrentUserProfile {
  id
  displayName
  images {
    url
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppGetMeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "SpotifyCurrentUserProfile",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "App_profile",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "App_player_profile",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppGetMeQuery",
    "argumentDefinitions": [],
    "selections": [
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
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "SpotifyCurrentUserProfile",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "displayName",
                "args": null,
                "storageKey": null
              },
              (v1/*: any*/),
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
                      (v0/*: any*/),
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
                          (v1/*: any*/)
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppGetMeQuery",
    "id": null,
    "text": "query AppGetMeQuery {\n  spotify {\n    me {\n      id\n      ...App_profile\n      ...App_player_profile\n    }\n  }\n}\n\nfragment App_player_profile on SpotifyCurrentUserProfile {\n  id\n  player {\n    isPlaying\n    item {\n      id\n      name\n      album {\n        images {\n          url\n        }\n      }\n    }\n  }\n}\n\nfragment App_profile on SpotifyCurrentUserProfile {\n  id\n  displayName\n  images {\n    url\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d2b142c54c756dbdef3da7654ffed34';
module.exports = node;
