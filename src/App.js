import React from "react";
import Header from "./components/Header/Header";
import './style.css'
import LaunchList from "./components/LaunchList/LaunchList";
import Launchview from "./components/Launchview/Launchview";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/launch/:flight_number">
            <Launchview/>
          </Route>
          <Route path="/">
            <LaunchList/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
