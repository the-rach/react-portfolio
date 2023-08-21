import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

/*
 * This component displays a footer for a webpage.
 * It includes a contact link.
 *
 * @return {*} 
 */
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