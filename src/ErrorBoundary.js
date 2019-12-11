import React from 'react';

/**
 * A reusable component for handling errors in a React (sub)tree.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error != null) {
      return (
        <div>
          <div>
            Error:
            {error.message}
          </div>
          <div>
            <pre>{JSON.stringify(error.source, null, 2)}</pre>
          </div>
        </div>
      );
    }
    return children;
  }
}
