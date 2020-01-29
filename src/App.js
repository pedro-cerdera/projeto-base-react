import React from "react";

import firebase from "firebase/app";

import { Root } from "./components";
import { Redux } from "./redux";

const App = () => {
  const firebaseConfig = {
  };
  firebase.initializeApp(firebaseConfig);

  return (
    <Redux>
      <Root />
    </Redux>
  );
};

export default App;
