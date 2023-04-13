import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            Magical Horned Beasts
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header; 