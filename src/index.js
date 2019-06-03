import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./config/store";

import AppLayout from "./components/Layout/AppLayout";
import FeedScreen from "./views/FeedScreen";
import LoginScreen from "./views/LoginScreen";
import RecoveryScreen from "./views/RecoveryScreen";
import RedefineScreen from "./views/RedefineScreen";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/recovery" component={RecoveryScreen} />
        <Route exact path="/redefine" component={RedefineScreen} />
        <Route exact path="/home" component={FeedScreen} />
      </AppLayout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
