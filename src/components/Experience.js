import { Container } from "react-bootstrap"
import { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import { LiIcon } from "./LiIcon"

/*
 * Displays details for Experience item.
 *
 * @param {*} {position, company, companyLink, time, address, work}
 * @return {*} 
 */
const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    return (
        <>
            <LiIcon reference={ref}/>
            <li ref={ref} className="details">
                <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                    <h3 className="details-title">{position}&nbsp;<a href={companyLink}
                    target="_blank" rel="noreferrer" className="company-link">@{company}</a></h3>
                    <span className="time-place">
                        {time} | {address}
                    </span>
                    <p className="details-info">
                        {work}
                    </p>
                </motion.div>
            </li>
        </>
    )
}

/*
 * This component displays Experience list.
 *
 * @return {*} 
 */
export const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <Container>
            <div className="education-experience-title">Experience</div>

            <Container ref={ref} className="education-experience-container">
                <motion.div style={{scaleY: scrollYProgress}} className="animated-line"/>
                <ul className="education-experience-list">
                    <Details 
                        position="Software Developer Intern" company="Built for Teams"
                        companyLink="https://www.builtforteams.com/"
                        time="June 2022 - March 2023" address="Salt Lake City, Utah"
                        work="During my software developer internship at Built for Teams, I successfully completed the internationalization of the company's entire product, which was based on Ruby on Rails, as well as their Browser Extension developed with React Native. My responsibilities extended to resolving numerous bugs and implementing a range of new features. This hands-on experience equipped me with a comprehensive skill set and a deep understanding of software development practices."
                    />
                </ul>
            </Container>

        </Container>
    )
}