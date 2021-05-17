import React from "react";
import { Switch, Route } from "react-router-dom";

//Import pages
import AboutUS from "./pages/AboutUS";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs"

//GlobalStyle
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <AboutUS />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
