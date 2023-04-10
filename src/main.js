import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeasts 
                title= "UniWhal"
                imageUrl= "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
                description= "A unicorn and a narwhal nuzzling their horns"
                />
                <HornedBeasts 
                title= "Rhino Family"
                imageUrl= "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
                description= "Parent rhino with two babies"
                />
            </>
        )
    }
}

class HornedBeasts extends React.Component {
    render() {
        return(
        <>
            <h2>{this.props.title}</h2>
            <img 
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            />
            <p>{this.props.description}</p>
        </>
        )
    }
}

export default Main;