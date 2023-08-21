import { Container } from "react-bootstrap"
import { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import { LiIcon } from "./LiIcon"
import api from '../api'
import { useState, useEffect } from 'react'

/*
 * Displays Details for Education item.
 * Includes LiIcon component.
 *
 * @param {*} {type, time, place, info}
 * @return {*} 
 */
const Details = ({type, time, place, info}) => {
    const ref = useRef(null);

    return (
        <>
            <LiIcon reference={ref}/>
            <li ref={ref} className="details">
                <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                    <h3 className="details-title">{type}</h3>
                    <span className="time-place">
                        {time} | {place}
                    </span>
                    <p className="details-info">
                        {info}
                    </p>
                </motion.div>
            </li>
        </>
    )
}

/*
 * This component displays Education list.
 *
 * @param {*} {text, className=""}
 * @return {*} 
 */
export const Education = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    )

    const [educations, setEducations] = useState([]);

    useEffect(() => {
        api.getAllEducations().then((response) => {
            setEducations(response.data.data);
        });
    }, []);


    return (
        <Container>
            <div className="education-experience-title">Education</div>

            <Container ref={ref} className="education-experience-container">
                <motion.div style={{scaleY: scrollYProgress}} className="animated-line"/>
                <ul className="education-experience-list">

                    {educations.map((education, index) => {
                        return (
                            <Details key={index}
                            type={education.type}
                            time={education.time} place={education.place}
                            info={education.info}
                            />
                        )
                    })}
                </ul>
            </Container>
        </Container>
    )
}