import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Sections from "./components/Sections/Sections";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Sections />
      </main>
    </div>
  );
};

export default App;
