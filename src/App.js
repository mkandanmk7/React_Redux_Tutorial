import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import CounterRequest from "./Components/CounterRequest";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router> */}
      <h2>Time out</h2>
      <CounterRequest />
    </div>
  );
}

export default App;
