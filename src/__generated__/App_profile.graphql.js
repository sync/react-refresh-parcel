/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_profile$ref: FragmentReference;
declare export opaque type App_profile$fragmentType: App_profile$ref;
export type App_profile = {|
  +id: ?string,
  +displayName: ?string,
  +images: ?$ReadOnlyArray<{|
    +url: ?string
  |}>,
  +$refType: App_profile$ref,
|};
export type App_profile$data = App_profile;
export type App_profile$key = {
  +$data?: App_profile$data,
  +$fragmentRefs: App_profile$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "App_profile",
  "type": "SpotifyCurrentUserProfile",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "displayName",
      "args": null,
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = '16bb9c208566a7c14f59add4cff00e59';
module.exports = node;
