import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
<<<<<<< HEAD
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Payment from './Payment';
import Orders from './Orders';
import CustomFooter from "./CustomFooter"
=======
import Payment from './Payment';
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49

const promise = loadStripe(
  "pk_test_51HPvTYJ8JHZj0y6KIuINFNfusRkEc32Fbv6Aa6eWXWZnNFYQxBVRx0BBvfyiBr5RTtBpBXKSfSfdcfnngXTqdxUH00dqZUQxvo"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
<<<<<<< HEAD
=======
      console.log('THE USER IS >>>> ', authUser);
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
<<<<<<< HEAD
        <ReactNotification />
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
<<<<<<< HEAD
            <CustomFooter />
=======
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
<<<<<<< HEAD
            <CustomFooter />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <CustomFooter />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <CustomFooter />
=======
          </Route>
          <Route path="/orders">
            <Header />
            <h1>Orders page</h1>
          </Route>
          <Route path="/">
            <Header />

            <Home />
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
