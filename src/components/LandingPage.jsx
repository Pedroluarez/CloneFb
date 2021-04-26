import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/LandingPage.css';
import Login from '../components/Login';

const LandingPage = () => {
    return (
        <>
            <div className="landingPageContent">
                <Container>
                    <Row>
                        <Col lg="6">
                            <p className="contentHeader">facebook</p>
                            <h2 className="contentSubText">Connect with friends and the world around you on Facebook.</h2>
                        </Col>
                        <Col lg="6">
                            <Login />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LandingPage