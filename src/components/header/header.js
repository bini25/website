import React, { Component ,  } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      { 
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">quotes</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Beniyam Mitiku.</h1>
            <h3>I'm a U.S. based <span>full stack software developer</span>, <span>engineer </span>with passion for designing better functional user experience; a <span>coder</span> who focuses; on writing clean, elegant and efficent code. Let's  <a className="smoothscroll" href="#about">start scrolling </a>
            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/biniyam1"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://gitlab.com/mitikubeniyam25"><i className="fab fa-gitlab" /></a></li>
              <li><a href="https://www.linkedin.com/in/beniyam-mitiku-60816660/"><i className="fa fa-linkedin" /></a></li>
              
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header> 
}
     
      </React.Fragment>
    );
  }
}







