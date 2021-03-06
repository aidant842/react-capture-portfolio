import React, { useState } from "react";
// import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Movie data import
import { MovieState } from "./movieState";

//Animation
import { AnimatePresence } from "framer-motion";

// Components
import Nav from "./components/Nav";

function App() {
    //Variables
    const location = useLocation();
    //State
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            {/* Add Switch so that once it finds the first match, it stops looking for matches. i.e it doesn't continue looking for other urls after / is found */}
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    {/* Add exact otherwise other urls that begin with a / will be rendered on that page */}
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork movies={movies} />
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetail
                            movies={movies}
                            movie={movie}
                            setMovie={setMovie}
                        />
                    </Route>
                    <Route path="/contact" exact>
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
