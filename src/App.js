import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

//Import pages
import AboutUS from "./pages/AboutUS";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetails from "./pages/MovieDetails";

//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";

//animation
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUS />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork />
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetails />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
