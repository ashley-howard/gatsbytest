import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer";
import Menu from "./menu"
import SocialLinks from './SocialLinks'

class Layout extends React.Component {
    constructor({ props }) {
        super(props);
        this.state = {
            scrollPixelsY: 0,
            body: "",
            height: 0,
        };

        this.themeChanger = this.themeChanger.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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

    handleScroll = () => {
        this.setState({
            scrollPixelsY: window.scrollY
        });

        this.themeChanger()
    };

    render() {
        return (
            <div className="container">
                <Helmet>
                    <body className={this.state.body}></body>
                </Helmet>

                <Menu />

                <SocialLinks />

                {this.props.children}

                <Footer />
            </div>
        )
    }
}

export default Layout