import {motion} from "framer-motion"

const quote = {
    initial: {
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity:1,
        y:50,
    },
    animate: {
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

/*
 * This component displays the Animated Text for page headings.
 *
 * @param {*} {text, className=""}
 * @return {*} 
 */
export const AnimatedText = ({text, className=""}) => {
    return (
        <div className="animatedText">
            <motion.h1 className={`${className}`}
            variants={quote}
            initial="initial"
            animate="animate">
                {
                    text.split(" ").map((word, index) =>
                    <motion.span key={word+'-'+index}
                    variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}