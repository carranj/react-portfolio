import React, {useState} from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {Navbar} from "./components/shared/navbar";
import {Home} from "./components/pages/Home";
import {Biography} from "./components/pages/Biography";
import {Portfolio} from "./components/pages/Portfolio";
import {Project} from "./components/pages/Project";
import {Contact} from "./components/pages/Contact";

const App = () => {
    return (
        <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/biography">
                            <Biography/>
                    </Route>
                    <Route exact path="/portfolio">
                            <Portfolio/>
                    </Route>
                    <Route path={"/portfolio/:shortname"}>
                            <Project/>
                    </Route>
                    <Route exact path="/contact">
                            <Contact/>
                    </Route>
                </Switch>
        </Router>
    )
};

render(<App />, document.getElementById('app'));