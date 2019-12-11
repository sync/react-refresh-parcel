/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_player_profile$ref: FragmentReference;
declare export opaque type App_player_profile$fragmentType: App_player_profile$ref;
export type App_player_profile = {|
  +id: ?string,
  +player: ?{|
    +isPlaying: ?boolean,
    +item: ?{|
      +id: ?string,
      +name: ?string,
      +album: ?{|
        +images: ?$ReadOnlyArray<{|
          +url: ?string
        |}>
      |},
    |},
  |},
  +$refType: App_player_profile$ref,
|};
export type App_player_profile$data = App_player_profile;
export type App_player_profile$key = {
  +$data?: App_player_profile$data,
  +$fragmentRefs: App_player_profile$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "App_player_profile",
  "type": "SpotifyCurrentUserProfile",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '314fb698509a45ba23978b8d40333eda';
module.exports = node;
