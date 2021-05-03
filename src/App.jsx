import Router from './routes/index'
import Loading from "./components/Loading";

const App = () => {
  const error = true
  const isLoading = false

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (

    <Router />
  );
}

export default App;
