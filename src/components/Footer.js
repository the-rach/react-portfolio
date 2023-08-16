import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <Container>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <Link to="mailto:msrachelgrant@gmail.com" id="contact-link" >Contact</Link>
            </Container>
        </footer>
    )
}