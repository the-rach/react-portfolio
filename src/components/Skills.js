import { Container } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import {motion} from "framer-motion";


/*
 * Displays Skill item.
 *
 * @param {*} {name, x, y}
 * @return {*} 
 */
const Skill = ({name, x, y}) => {
    return (
        <motion.div className="center-skill" id="outer-skills" whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={{duration:1.5}}
            viewport={{once: true}}>
           {name}
        </motion.div>
    )
}

/*
 * Displays Skills component.
 *
 * @return {*} 
 */
export const Skills = () => {

      return (
        <Container>
            <h2 className="skills-title">Skills</h2>
            <div className="skills">
                <motion.div className="center-skill" whileHover={{scale:1.05}}>
                    Web
                </motion.div>

                <Skill name="HTML" x="-18vw" y="2vw"/>
                <Skill name="CSS" x="-5vw" y="-11vw"/>
                <Skill name="Javascript" x="20vw" y="9vw"/>
                <Skill name="ReactJS" x="0vw" y="8vw"/>
                <Skill name="Git" x="30vw" y="2vw"/>
                <Skill name="jQuery" x="10vw" y="-19vw"/>
                <Skill name="C" x="-32vw" y="10vw"/>
                <Skill name="C++" x="-13vw" y="-22vw"/>
                <Skill name="Java" x="10vw" y="19vw"/>
                <Skill name="Python" x="25vw" y="-12vw"/>
                <Skill name="NodeJS" x="-18vw" y="15vw"/>
                <Skill name="Express" x="-24vw" y="-10vw"/>
                <Skill name="MongoDB" x="16vw" y="-5vw"/>
                <Skill name="EJS" x="-5vw" y="23vw"/>
                
            </div>
        </Container>
      )
}