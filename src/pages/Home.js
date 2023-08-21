import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import femaleDeveloperPic from '../assets/img/female-developer.png';
import resume from '../assets/Rachel_Grant_Resume.pdf';
import { LinkArrow } from '../components/Icons.js';
import {AnimatedText} from '../components/AnimatedText.js'

/*
 * Render the home page for the developer portfolio.
 * Includes developer profile image, title, subtitle, resume link, & contact link.
 *
 * @return {*} 
 */
export const Home = () => {

    return (
        <>
            <Container className="home-container">
                <Row>
                    <Col lg={true}>
                        <img src={femaleDeveloperPic} alt="Female Developer Profile" className="profile-img"/>  
                    </Col>
                    <Col id="home-content" >
                        <AnimatedText text="Turning Dreams into Digital Realities" className="home-animatedText"/>
                        <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                            Explore my latest projects showcasing my expertise in React.js and web development.</p>
                        <Container>
                            <Link to={resume} download={(true, "Resume")} target="_blank" rel="nonreferrer" ><Button variant="dark" className="resume-button">Resume<LinkArrow className="link-arrow"/></Button></Link>
                            <Link to="mailto:msrachelgrant@gmail.com" id="contact-link" >Contact</Link>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
        
    )
}