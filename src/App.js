import React from 'react';
import {
  RelayEnvironmentProvider,
  graphql,
  useLazyLoadQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
      description
      homepageUrl
    }
  }
`;

function App(props) {
  const data = useLazyLoadQuery(RepositoryNameQuery);

  return (
    <div className="bg-white rounded-lg m-auto p-6">
      <div className="text-center">
        <h2 className="text-lg">{data.repository.name}</h2>
        <div className="text-purple-500">{data.repository.description}/</div>
        <div className="text-gray-600">{data.repository.homepageUrl}</div>
      </div>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
