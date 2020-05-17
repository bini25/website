import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      { <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Quotes</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                <li>
                    <blockquote>
                      <p> You are the Semicolon to My Statements;
                      </p>
                      <cite>Anonymous</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>Without requirements or design, programming is the art of adding bugs to an empty text file
                      </p>
                      <cite>Louis Srygley</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p> Thing aren't always #000000 and #ffffff
                      </p>
                      <cite>Anonymous</cite>
                    </blockquote>
                  </li> 
                  <li>
                    <blockquote>
                      <p> A good programmer is someone who always looks both ways before crossing a one-way street.
                      </p>
                      <cite>Doug Linder</cite>
                    </blockquote>
                  </li>  
                  <li>
                    <blockquote>
                      <p>I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.
                      </p>
                      <cite>Oktal</cite>
                    </blockquote>
                  </li>  
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section> 
    }
      
      </React.Fragment>
    );
  }
} 

     