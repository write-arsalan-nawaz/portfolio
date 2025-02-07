import { Container, Row, Col } from "react-bootstrap";
import './Contact.css'

const ContactInfo = () => {
    return(
        <Container style={{paddingTop: '150px', paddingBottom: '150px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-left">
                <h1 className="yellow">Email</h1>
                <h1>write.arsalan.nawaz@gmail.com</h1>
            </Col>
            </Row>
        </Container>
    )
}

export default ContactInfo