import React from "react";
import {Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <header>
            <div className ="container-fluid text-center">
                <div className="row">
                    <div className="col-md-12">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/biography">Biography</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
      </header>
    )
};