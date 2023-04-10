import { Component } from "react";

class Footer extends Component {
    render() {
        return <p>Created by {this.props.creator}</p>;
    }
}

export default Footer;