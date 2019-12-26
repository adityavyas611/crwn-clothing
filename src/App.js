import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const Hatspage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={Hatspage} />
    </div>
  );
}

export default App;
