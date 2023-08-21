import { Col, Container, Row, Image } from "react-bootstrap";
import rachelPhoto from '../assets/img/rachel-photo-portrait.png'; 
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Skills } from '../components/Skills';
import { AnimatedText } from '../components/AnimatedText'

/*
 * Render the about page for the developer profile.
 * Includes the Biography and renders the Skills, Education, and Experience components.
 *
 * @return {*} 
 */
export const About = () => {
    return (
        <>
            <AnimatedText text="My Software Developer Journey" className="about-animatedText"/>
            <Container className="about">
                <Row className="gridRow">
                    <Col className="bio-column" xl={4} lg={5}>
                        <h2 className="bio">Biography</h2>
                        <p>Hello there! I'm Rachel Grant, a passionate and driven Full Stack Software Engineer with a fresh degree in Computer Science from Brigham Young University. I thrive on turning complex challenges into elegant solutions, and I'm excited to embark on a journey to shape the digital world.</p>
                        <p>The ever-evolving nature of technology inspires me to stay curious and continuously learn, pushing the boundaries of what's possible in the digital realm. I'm deeply enthusiastic about collaborating with like-minded individuals, building innovative solutions, and contributing to the success of impactful projects.</p>
                        <p>Thank you for visiting my portfolio website! I'm eager to connect with fellow developers, potential employers, and collaborators. Let's work together to turn ambitious dreams into tangible digital realities. If you'd like to get in touch, don't hesitate to reach out!</p>
                    </Col>
                    <Col className="profile-img-col" xl={4} lg={5}>
                        <Image src={rachelPhoto} alt="Rachel Profile Image" className="rachel-photo" fluid/>
                    </Col>
                    <Col className="accolades col-2">
                        <Container>
                            <span>
                                B.S.
                            </span>
                            <h2>
                                in Computer Science
                            </h2>
                        </Container>
                        <Container>
                            <span>
                                1
                            </span>
                            <h2>
                                years of experience
                            </h2>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <Skills />
            <Education/>
            <Experience/>
        </>
        
    )
} 