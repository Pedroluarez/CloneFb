import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button } from 'react-bootstrap';
import '../css/Footer.css'

const Footer = () => {
    return (
        <>
            <Container>
                <Row className="footerText mt-2">
                    <p>English (US)</p>
                    <p className="textTranslate">
                        Filipino
                        Bisaya
                        Español
                        한국어
                        日本語
                        العربية
                        中文(简体)
                        Português (Brasil)
                        Français (France)
                        Deutsch</p>
                    <Button variant="light" size="small" className="footerBtn">+</Button>
                </Row>
                <hr className="divisionFooter" />
                <p className="footerSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ante eget lectus feugiat, vitae lacinia tortor dapibus. Fusce sed sodales orci. Nam congue purus et risus laoreet ullamcorper. Nullam mattis ac elit ac luctus. Nulla sagittis consequat lacinia. </p>
                <p className="footerContentText">Facebook © 2021</p>
            </Container>
        </>
    )
}

export default Footer
