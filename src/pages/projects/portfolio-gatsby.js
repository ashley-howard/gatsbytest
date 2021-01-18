import React from 'react'
import Layout from '../../components/layout'
import ProjectHeader from '../../components/ProjectHeader'
import imgPortfolio from "../../img/portfolio/portfolio-gatsby/portfolio.jpg"
import imgFlower1 from "../../img/portfolio/portfolio-gatsby/flower-1.jpg"
import imgBirds from "../../img/portfolio/portfolio-gatsby/birds.jpg"

export default function PortfolioGatsby() {
    return (
        <Layout theme={"secondary"}>
            {/* Helmet uses ProjectHeader's title */}
            <ProjectHeader title="Portfolio 3.0" img={imgPortfolio} />

            <div className="container">
                <h5>Heading</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac malesuada augue.
                Vivamus orci lorem, varius at finibus id, imperdiet sit amet libero. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Nulla facilisi. Fusce condimentum fermentum lacus,
                quis laoreet nisl vestibulum quis. Praesent semper felis at magna hendrerit cursus. Curabitur
                euismod in orci ac vulputate. Vivamus in nunc rutrum, sodales risus in, interdum massa. Proin
                eu tempus justo.</p>
            </div>

            <div className="img-container" style={{ backgroundImage: `url(${imgFlower1})` }}></div>

            <div className="container">
                <h5>Heading</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac malesuada augue.
                Vivamus orci lorem, varius at finibus id, imperdiet sit amet libero. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Nulla facilisi. Fusce condimentum fermentum lacus,
                quis laoreet nisl vestibulum quis. Praesent semper felis at magna hendrerit cursus. Curabitur
                euismod in orci ac vulputate. Vivamus in nunc rutrum, sodales risus in, interdum massa. Proin
                eu tempus justo.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac malesuada augue.
                Vivamus orci lorem, varius at finibus id, imperdiet sit amet libero. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Nulla facilisi. Fusce condimentum fermentum lacus,
                quis laoreet nisl vestibulum quis. Praesent semper felis at magna hendrerit cursus. Curabitur
                euismod in orci ac vulputate. Vivamus in nunc rutrum, sodales risus in, interdum massa. Proin
                eu tempus justo.</p>
            </div>

            <div className="img-container" style={{ backgroundImage: `url(${imgBirds})` }}></div>

            <div className="container">
                <h5>Heading</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac malesuada augue.
                Vivamus orci lorem, varius at finibus id, imperdiet sit amet libero. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Nulla facilisi. Fusce condimentum fermentum lacus,
                quis laoreet nisl vestibulum quis. Praesent semper felis at magna hendrerit cursus. Curabitur
                euismod in orci ac vulputate. Vivamus in nunc rutrum, sodales risus in, interdum massa. Proin
                eu tempus justo.</p>
            </div>

        </Layout>
    )
}