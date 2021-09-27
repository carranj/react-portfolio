import React, {useState} from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {Biography} from "./components/pages/Biography";
import {Portfolio} from "./components/pages/Portfolio";
import {Project} from "./components/pages/Project";
import {Contact} from "./components/pages/Contact";
import {Navbar} from "./components/shared/navbar";

const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/biography" component={Biography}/>
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path={"/portfolio/:shortname"} component={Project} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </>
    )
};

render(<App />, document.getElementById('app'));