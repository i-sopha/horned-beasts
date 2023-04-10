import { Component } from "react";

class Header extends Component {
    render() {
        return <h1>{this.props.heading}</h1>;
    }
}

export default Header; 