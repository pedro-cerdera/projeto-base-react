import React from 'react';
import { Redux } from "./redux";
import { Root } from "./components";

function App() {
  return (
    <Redux>
      <Root />
    </Redux>
  );
}

export default App;
