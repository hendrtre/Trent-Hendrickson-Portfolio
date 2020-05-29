import React from 'react'
import profilePicture from "../../../static/assets/bio/IMG_2369.jpg"
import NotreDame from "../../../static/assets/images/page-cover/landscape-cathedrale-notre-dame-de-paris.jpg"

export default function() {
    return (
      <div className="about-me">
        <img className="NotreDame" src={NotreDame} alt="Notre Dame"/>
          {/* <div className="content-page-wrapper"> */}
          <div 
              // className="left-column"
              style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
              }} 
          />
          {/* <div className="right-column"> */}
            <h2>Hello, My Name is Trent Hendrickson</h2>
            {/* <p>Hello, My Name is Trent Hendrickson</p> */}


            <p>
              I'm an actively seeking Software Engineer and I'm currently continuing
               my skills about JavaScript, Python, React, Cypress.io, and other languages!
                I can handle Microsoft programs, Adobe XD. I consider myself a diligent
                worker willing to go the extra mile. Good communicator that is strong on a team. 
                Always in an optimistic mood that can be contagious to uplift other teammates 
                when they need it.
            </p>
            <p>
              More about me, I grew up in Orem Utah, in a family of five. I'm a big fan of 
              Disney, Star Wars, Marvel, video gaming, and other nerdy stuff. I graduated from Mountain 
              View High School and during my high school years I've been able to do a lot of great 
              things during that time. I have a love for choir and that has allowed me to travel around 
              the world to sing and visit some amazing places. Such as going to New York to perform in 
              the famous Carnegie Hall with my A Capella group. Later I joined with the Utah Ambassadors 
              of Music to visit and perform in 7 different countries in western Europe. I love it when I 
              can explore the world. All the page images on my site are from destinations that I personally 
              visited. 
            </p>
            <p>
              After my high school years I volunteered my services as a missionary for The Church of 
              Jesus Christ of Latter Day Saints. Where I spent two years of my life in the service of 
              helping in New York City and Long Island area. After, I returned from my services I graduated 
              from Snow College with "Honors" recognition. Couldn't quite figure out what career I wanted to 
              go into until I stumbled into coding. I've always had a passion for the arts and technology. Now 
              I have found the career that I feel the same amount of passion to go into a career.
            </p>

          {/* </div> */}
        {/* </div> */}
      </div>
    );
  }