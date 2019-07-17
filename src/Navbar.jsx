import React from 'react';
import SocialNetworks from "./components/SocialNetworks";

const Navbar = () => {
	return(
      <div className="ts-navbar">
        <div className="ts-navbar-wrapper d-flex col-12 space-between">
        	<div className="ts-menu d-flex align-start">
        		<div className="menu-item">
              <a href="#getting-started">Getting Started</a>
            </div>
        		<div className="menu-item">
              <a href="#philosophy">Philosophy</a>
            </div>
        		<div className="menu-item">
              <a href="#testimonials">Testimonials</a>
            </div>
        		<div className="menu-item">
              <a href="https://docs.tradestatistics.io/" target="_blank" rel="noopener noreferrer">Docs</a>
            </div>
        	</div>
          <div className="d-flex align-end" style={{ paddingRight: "2rem" }}>
            <SocialNetworks/>
          </div>
        </div>
      </div>)
}

export default Navbar;