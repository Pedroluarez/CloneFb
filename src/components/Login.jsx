import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button, Col } from 'react-bootstrap';
import '../css/Login.css';

const Login = () => {
    return (
        <>
            <div className="landingPageLogin">
                <Container>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter email or Phone Number" size="lg" />
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" size="lg" />
                                </Form.Group>
                            </Form>
                            <Button variant="primary" size="lg" block>
                                <b>Login</b>
                            </Button>
                            <p className="mt-3 text-center loginText">Forgot Password?</p>
                            <hr />
                            <Col className="text-center">
                                <Button variant="success" size="lg"><b>Create New Account</b></Button>
                            </Col>
                        </Card.Body>
                    </Card>
                    <p className="text-center mt-4"><b className="createPage">Create a Page</b> for a celebrity, band or business.</p>
                </Container>
            </div>
        </>
    )
}

export default Login
