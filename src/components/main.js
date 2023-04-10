import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HornedBeast from './beasts';
import beasts from './images.json';

class Main extends Component {

  render() {
    return (
            <>
                <Container>
                    <Row>
                        {beasts.map(beast => {
                        return (
                            <Col xs={4}>
                            <HornedBeast key={beast._id} title={beast.title} imageUrl={beast.image_url} description={beast.description} />
                            </Col>
                        )
                        })
                        }
                    </Row>
                </Container>


            </>
        )
    }
}


export default Main;