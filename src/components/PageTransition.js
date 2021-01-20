import React from 'react'
import logo from "../../static/logo-white.svg"

class PageTransition extends React.Component {

    render() {
        return (
            <div id="page-transition">
                <div className="inner-container">
                    <img src={logo} alt="" />

                    <div className="grouped">
                        <div className="name">Ashley Howard</div>
                        <div className="role">Front-end web developer</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PageTransition;