import React from 'react'
import PortfolioContainer from '../portfolio/portfolio-container'
import Zermatt from '../../../static/assets/images/page-cover/Zermatt-Matterhorn.jpg'
import "../../fonts/Rebellion.ttf"

export default function() {
    return (
        <div className="homepage-container">
            <div className="home-cover-image">
                <img src={Zermatt} alt="Zermatt-Matterhorn.jpg"/>
                <div className="img-text-1">"Greetings, this is Trents Portfolio."</div>
                <div className="img-text-2">"Check out his Software Engineering projects!"</div>
            </div>
            <PortfolioContainer />
        </div>
    )
}