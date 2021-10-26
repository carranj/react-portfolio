import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Biography = () => {

    return (  
        <div className="container-fluid biography p-0">
            <div className="row intro m-0">
                <div className="col-md-6">
                    <div className="name mt-5">
                        <h1>Jose Carranco</h1>
                        <a href="mailto:carranco.jose.r@gmail.com">carranco.jose.r@gmail.com</a>
                        <br/>
                            <a className="socialIcons" href="https://www.linkedin.com/in/carranj" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a className="socialIcons" href="https://www.facebook.com/carranj" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                            <a className="socialIcons" href="https://github.com/carranj" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                          
                          <p>I'm a Full Stack Web Developer and specialize in building Angular applications and custom WordPress websites. <Link to={'/portfolio'}>Click here</Link> to see my featured work and learn more of my interactive journey.</p>
                      </div>
                  </div>
                  <div className="col-md-6 profilephoto">
                      <img className="img-fluid profile-photo" src="/images/profile-photo.jpg" alt=""/>
                  </div>
              </div>
              <div className="row sectionTwo m-0">
                
                      <div className="col-md-4">
                          <h2>Strategy</h2>
                          <ul>
                              <li>Inbound Marketing</li>
                              <li>Whitepaper</li>
                              <li>Social Media Planning</li>
                              <li>Project Management</li>
                              <li>Google Analytics</li>
                              <li>Branding</li>
                          </ul>
                      </div>
                      <div className="col-md-4">
                          <h2>Development</h2>
                          <ul>
                              <li>Angular</li>
                              <li>React</li>
                              <li>Laravel</li>
                              <li>WordPress</li>
                              <li>JavaScript</li>
                              <li>PHP</li>
                          </ul>
                      </div>                                                
                      <div className="col-md-4">
                          <h2>Design</h2>
                          <ul>
                              <li>Photoshop</li>
                              <li>Illustrator</li>
                              <li>XD</li>
                              <li>SVG Animation</li>
                              <li>Website Design</li>
                              <li>Print Production</li>
                          </ul>
                      </div>
              </div>
          </div>
      );
};