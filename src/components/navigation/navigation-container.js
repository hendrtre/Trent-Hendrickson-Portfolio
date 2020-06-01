import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import navPicture from "./../../../static/assets/bio/MyProfile.jpg"
import balanceLine from "../../../static/assets/images/Other/balance-line-cropped.jpg"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import '../../fonts/BlackPearl.ttf'



const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (    
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
    }

    const handleSignOut = () => {
        axios
        // .delete("https://api.devcamp.space/logout", { withCredentials: true })
        .delete("https://api.devcamp.space/logout", { withCredentials: true })
        .then(response => {
          if (response.status === 200) {
              console.log('hi')
            props.history.push("/")
            props.handleSuccessfulLogout()
          }
          return response.data
        })
        .catch(error => {
          console.log("Error signing out", error)
        })
    }

    return (
        <div className="nav-wrapper">
            <div className="nav-image">
                <img src={navPicture} alt="Itsa Me TRENTIO! HAHA"/>
            </div>
            
            <div className="right-side">
                <div className="myName">
                    <div className="myFirstName">Trent</div>
                    <div className="myLastName">Hendrickson</div>
                </div>
                {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>
                    <FontAwesomeIcon icon="sign-out-alt" />
                </a> : null}
            </div>

            <img className="balance-line" src={balanceLine} alt="balanceLine"/>

            {/* <p>Actively Seeking,</p> */}
            <p>Software Engineer</p>
            <p>Front-End Developer</p>
            <p>QA Tester</p>

            <div className="left-side">

                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>
                
                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

{/* I KNOW THAT THIS ISN'T PRETTY BUT I LEFT THE CODE FOR BLOG JUST IN CASE I EVER NEEDED IT FOR FUTURE REFERENCE OR USE */}
                    {/* <div className="nav-link-wrapper">
                        <NavLink to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div> */}


                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/portfolio-manager", "Portfolio Manager") : null }
            </div>    
            <div className="social-links">
                <div className="icon">
                    <a href="https://www.linkedin.com/in/trent-hendrickson-09b4781a1/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/hendrtre">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://docs.google.com/document/d/1hvFAg3GPAPTBZi_gawR_zOvt4MdhTTFCtJ54kZxr7qU/edit?usp=sharing">
                        <FontAwesomeIcon icon="file-alt" />
                    </a>
                </div>
            </div>

            <img className="balance-line" src={balanceLine} alt="balanceLine"/>
        </div>
    )
}


export default withRouter(NavigationComponent)