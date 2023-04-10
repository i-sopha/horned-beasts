import React from "react";

class Footer extends React.Component {
    render() {
        return <p>Created by {this.props.creator}</p>;
    }
}

export default Footer;