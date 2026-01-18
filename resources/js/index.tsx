import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/biography" element={<Biography />}/>
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:shortname" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);