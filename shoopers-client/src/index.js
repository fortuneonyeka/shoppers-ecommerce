import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store, persistor } from "./features/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from 'redux-persist/integration/react'
import { app } from "./firebase.config";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} app={app}>
     <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);
