import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"
import Project from "../components/Project"

export default function Portfolio() {
    return (
        <Layout theme={"secondary"}>
            <Helmet>
                <body id="portfolio"></body>
                <title>Portfolio | Ashley Howard | Bespoke Web Design and Development</title>
                <link rel="canonical" href="https://ashley.how/portfolio" />
            </Helmet>

            {/* Featured Projects */}
            <section className="projects featured">
                <Header headerText="Featured Projects" />

                <Project
                    type="Website"
                    featured
                    title="Aliquam euismod"
                    img="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    alt="project image"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus vulputate aliquam. 
                Fusce consectetur nisi est, malesuada aliquet nibh ultrices id."
                    tags="#lorem #ipsum #other"
                    url="https://www.website.com"
                />

                <Project
                    type="Design"
                    featured
                    title="Vestibulum leo"
                    img="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    alt="project image"
                    desc="Phasellus placerat, magna eu egestas porttitor, sem libero egestas diam, eu ultrices mauris lorem in diam."
                    tags="#lorem #ipsum #other"
                    url="/about"
                />
            </section>

            {/* More Projects */}
            <section className="projects">
                <Header headerText="More Projects" />

                <div className="projects-container">
                    <Project
                        type="Website"
                        title="Vestibulum leo"
                        img="https://www.lantra.co.uk/sites/default/files/styles/crop_article_banner/public/2020-03/tree-3822149_1920.jpg"
                        alt="project image"
                        theme="#86582c"
                        desc="Phasellus placerat, magna eu egestas porttitor."
                        tags="#lorem #ipsum #other"
                        url="https://www.website.com"
                    />
                    <Project
                        type="Design"
                        title="Vestibulum leo"
                        img="https://www.lantra.co.uk/sites/default/files/styles/crop_article_banner/public/2020-03/tree-3822149_1920.jpg"
                        alt="project image"
                        theme="#86582c"
                        desc="Phasellus placerat, magna eu egestas porttitor."
                        tags="#lorem #ipsum #other"
                        url="https://www.website.com"
                    />
                    <Project
                        type="Website"
                        title="Vestibulum leo"
                        img="https://www.lantra.co.uk/sites/default/files/styles/crop_article_banner/public/2020-03/tree-3822149_1920.jpg"
                        alt="project image"
                        theme="#86582c"
                        desc="Phasellus placerat, magna eu egestas porttitor."
                        tags="#lorem #ipsum #other"
                        url="/about"
                    />
                    <Project
                        type="Website"
                        title="Vestibulum leo"
                        img="https://www.lantra.co.uk/sites/default/files/styles/crop_article_banner/public/2020-03/tree-3822149_1920.jpg"
                        alt="project image"
                        theme="#86582c"
                        desc="Phasellus placerat, magna eu egestas porttitor."
                        tags="#lorem #ipsum #other"
                        url="https://www.website.com"
                    />
                    <Project
                        type="Design"
                        title="Vestibulum leo"
                        img="https://www.lantra.co.uk/sites/default/files/styles/crop_article_banner/public/2020-03/tree-3822149_1920.jpg"
                        alt="project image"
                        theme="#86582c"
                        desc="Phasellus placerat, magna eu egestas porttitor."
                        tags="#lorem #ipsum #other"
                        url="https://www.website.com"
                    />
                    <Project
                        type="Design"
                        title="Vestibulum leo"
                        img="https://www.lantra.co.uk/sites/default/files/styles/crop_article_banner/public/2020-03/tree-3822149_1920.jpg"
                        alt="project image"                       
                        desc="Phasellus placerat, magna eu egestas porttitor."
                        tags="#lorem #ipsum #other"
                        url="/contact"
                    />
                </div>
            </section>
        </Layout>
    )
}