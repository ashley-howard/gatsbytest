import React from "react"
import { Link } from "gatsby"

class Menu extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         scrollPixelsY: 0
    //     };
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // };

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll = () => {
    //     this.setState({
    //         scrollPixelsY: window.scrollY
    //     });
    //     if (this.state.scrollPixelsY > 100) {
    //         // make menu fixed 
    //         document.getElementsByTagName('nav')[0].classList.add('show')

    //     } else {
    //         // make menu unfixed
    //         document.getElementsByTagName('nav')[0].classList.remove('show')

    //     }
    // };

    render() {
        return (
            <nav>
                <div className="menu-links">
                    <Link to="/" activeClassName="active">home</Link>
                    <Link to="/about" activeClassName="active">about</Link>
                    <Link to="/services" activeClassName="active">services</Link>
                    <Link to="/portfolio" activeClassName="active">portfolio</Link>
                    {/* <Link to="/contact" activeClassName="active">contact</Link> */}
                    <a href="mailto:contact@ashley.how" target="_blank" rel="noopener noreferrer">get in touch</a>
                </div>

                <div id="menu-btn" className="closed">
                    <div id="menu-line-left"></div>
                    <div id="menu-line-right"></div>
                </div>
            </nav>
        )
    }
}
export default Menu;