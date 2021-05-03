import React from 'react'
import { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
// import Router from './routes/index'
// import Loading from "./components/Loading";


const IdentityModal = React.lazy(() => import("react-netlify-identity-widget"))

function App() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(true)
  const isLoggedIn = identity && identity.isLoggedIn




  console.log(dialog)
  return (
    <div className="App">
      <button className="btn" onClick={() => setDialog(!dialog)}>
        {isLoggedIn ? "LOG OUT" : "LOG IN"}
      </button>
      <React.Suspense fallback="loading...">
        <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} aria-labelledby="form" />
      </React.Suspense>
    </div>
  )
}

// const App = () => {
//   const error = true
//   const isLoading = false

//   if (error) {
//     return <div>Oops... {error.message}</div>;
//   }

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (

//     <Router />
//   );
// }

export default App;
