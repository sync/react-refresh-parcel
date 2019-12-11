import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetch from 'isomorphic-fetch';
import OneGraphAuth from 'onegraph-auth';

// eslint-disable-next-line prefer-destructuring
const ONEGRAPH_APP_ID = process.env.ONEGRAPH_APP_ID;

export const auth = new OneGraphAuth({
  appId: ONEGRAPH_APP_ID,
});

/**
 * Relay requires developers to confiimport OneGraphAuth from "onegraph-auth"gure a "fetch" function that tells Relay how to load
 * the results of GraphQL queries froimport OneGraphAuth from "onegraph-auth"m your server (or other data source). See more at
 * https://relay.dev/docs/en/quick-stimport OneGraphAuth from "onegraph-auth"art-guide#relay-environment.
 */
async function fetchRelay(params, variables, _cacheConfig) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(
    `https://serve.onegraph.com/dynamic?app_id=${ONEGRAPH_APP_ID}`,
    {
      method: 'POST',
      headers: {
        ...auth.authHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    },
  );

  // Get the response as JSON
  const json = await response.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    // eslint-disable-next-line no-console
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        params.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors,
      )}`,
    );
  }

  // Otherwise, return the full payload.
  return json;
}

// Export a singleton instance of Relay Environment configured with our network layer:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource(), {
    // This property tells Relay to not immediately clear its cache when the user
    // navigates around the app. Relay will hold onto the specified number of
    // query results, allowing the user to return to recently visited pages
    // and reusing cached data if its available/fresh.
    gcReleaseBufferSize: 10,
  }),
});
