import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import veniceBackground from "../../../static/assets/images/page-cover/venice-background-4.jpg"
import dimondLine from "../../../static/assets/images/Other/dimond-line-cropped.jpg"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import '../../fonts/StarJedi.ttf'

export default function() {
    return (
      <div className="content-page">
      <img className="veniceBackground" src={veniceBackground} alt="venice-background"/>

        <div className="content-page-wrapper">

        <div className="left-column">
          <h2>Best way to contact Trent:</h2>
          <img src={dimondLine} alt="dimondLine"/>

          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                  <FontAwesomeIcon icon="phone" />
              </div>
              <div className="text">(385)-329-1441</div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                  <FontAwesomeIcon icon="envelope" />
              </div>
              <div className="text">trentdev2020@gmail.com</div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                  <FontAwesomeIcon icon="map-marked-alt" />
              </div>
              <div className="text">From: Orem, UT</div>
            </div>
          </div>
        </div>

          <div className="right-column">
            <div className="social-links">
              <h2>Take a look at my:</h2>
              
              <img src={dimondLine} alt="dimondLine"/>


              <div className="bullet-point-group">
                <a href="https://www.linkedin.com/in/trent-hendrickson-09b4781a1/" className="social-links">
                  <div className="icon">
                      <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/trent-hendrickson-09b4781a1/" className="social-links">
                  <div className="text">Linkedin</div>
                </a>
              </div>

              <div className="bullet-point-group">
                <a href="https://github.com/hendrtre">
                  <div className="icon">
                      <FontAwesomeIcon icon={faGithubSquare} />
                  </div>
                </a>
                <a href="https://github.com/hendrtre">
                  <div className="text">Github</div>
                </a>
              </div>

              <div className="bullet-point-group">
                <a href="https://docs.google.com/document/d/1hvFAg3GPAPTBZi_gawR_zOvt4MdhTTFCtJ54kZxr7qU/edit?usp=sharing">
                  <div className="icon">
                      <FontAwesomeIcon icon="file-alt" />
                  </div>
                </a>
                <a href="https://docs.google.com/document/d/1hvFAg3GPAPTBZi_gawR_zOvt4MdhTTFCtJ54kZxr7qU/edit?usp=sharing">
                  <div className="text">Resume</div>
                </a>
              </div>

          </div>
        </div>

      </div>

        <div className="reference">
                <h2>My references:</h2>
                <div className="text">Michael Strange <FontAwesomeIcon icon="user-tie" /> mike@strangegunsmithing.com</div>
        </div>
    </div>
    );
  }