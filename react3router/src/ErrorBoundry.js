// this is the Component for render when main component is not loading
function ErrorFallback({ error, resetErrorBoundry }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundry}>Try again</button>
        </div>
    );
}

export default ErrorFallback;