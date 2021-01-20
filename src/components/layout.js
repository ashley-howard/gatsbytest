import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer";
import Menu from "./menu"
import PageTransition from "./PageTransition";
import ReadyToChat from "./ReadyToChat";
import SocialLinks from './SocialLinks'
import Testimonials from "./Testimonials";

class Layout extends React.Component {
    constructor({ props }) {
        super(props);
        this.state = {
            scrollPixelsY: 0,
            body: "",
            height: 0,
            menu: "show",
        };

        this.themeChanger = this.themeChanger.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount() {
        this.setState({ height: window.innerHeight });
        window.addEventListener('scroll', this.handleScroll);
        this.themeChanger()
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    themeChanger = () => {
        if (this.props.theme === "to-secondary") {
            if (this.state.scrollPixelsY > (this.state.height / 2)) {
                this.setState({
                    body: "secondary"
                });
            } else {
                this.setState({
                    body: 'primary'
                });
            }
        }
        else if (this.props.theme === "to-primary") {
            if (this.state.scrollPixelsY > (this.state.height / 2)) {
                this.setState({
                    body: "primary"
                });
            } else {
                this.setState({
                    body: 'secondary'
                });
            }
        }
        else {
            this.setState({
                body: this.props.theme
            });
        }
    }

    // if you're past the user's viewport height, and you scroll up, you can see the menu
    showMenu = () => {
        if (this.state.scrollPixelsY > (this.state.height / 1.8)) {
            document.getElementsByTagName('nav')[0].classList.add('fixed')
        } else {
            document.getElementsByTagName('nav')[0].classList.remove('fixed')
        }
    }

    handleScroll = () => {
        this.setState({
            scrollPixelsY: window.scrollY
        });

        this.themeChanger()
        this.showMenu()
    };


    render() {
        return (
            <div>
                <Helmet>
                    <body className={this.state.body}></body>
                </Helmet>

                <Menu />

                <SocialLinks />

                {/* <div className="container"> */}
                {this.props.children}
                {/* </div> */}

                {/* <Testimonials /> */}

                {/* <ReadyToChat /> */}

                <Footer />

                {/* <PageTransition /> */}
            </div>
        )
    }
}

export default Layout