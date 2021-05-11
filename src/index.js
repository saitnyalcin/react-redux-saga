import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import * as serviceWorker from "./serviceWorker";

const ConnectedApp = connect((state) => state)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
