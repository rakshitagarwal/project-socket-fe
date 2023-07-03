import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigations from "./routes/Navigations";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
}

export default App;
