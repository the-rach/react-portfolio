import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react"
import { motion } from "framer-motion";
import { LinkedInIcon, GithubIcon } from './Icons';

/*
 * This component dispalys the header of the website.
 * It includes the navigation bar, logo, and social icons.
 *
 * @return {*} 
 */
export const Header = () => {

    const {activeLink, setActiveLink} = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const MotionNavLink = motion(NavLink);

    return (
        <>
            <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <div className="navbar-logo" > 
                            <MotionNavLink to="/"  
                                className="navbar-brand" whileHover={{
                                backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                                transition:{duration:1, repeat: Infinity}
                                }}
                                >RG</MotionNavLink>
                    </div>
                    
                        <Navbar.Collapse id="basic-navbar-nav">

                            <div id="navbar-items-container">
                                <Nav>
                                    <Nav.Link as={NavLink} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home
                                        <span className="navbar-underline">&nbsp;</span>
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About
                                        <span className="navbar-underline">&nbsp;</span>
                                    </Nav.Link>
                                    {/* <Nav.Link as={NavLink} to="/projects" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects
                                        <span className="navbar-underline">&nbsp;</span>
                                    </Nav.Link> */}
                                </Nav>

                                <Nav className="ms-auto">
                                    <MotionNavLink to={"https://www.linkedin.com/in/rachel-grant-41852a236/"} target="_blank" className="social-icon" whileHover={{ y: -5}} whileTap={{scale:0.9}}>
                                        <LinkedInIcon />
                                    </MotionNavLink>
                                    <MotionNavLink to={"https://github.com/the-rach"} target="_blank" whileHover={{ y: -5}} whileTap={{scale:0.9}} >
                                        <GithubIcon />
                                    </MotionNavLink>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    
                    
            </Navbar>
        </>
    )
}