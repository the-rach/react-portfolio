import { motion, useScroll } from "framer-motion"

export const LiIcon = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
            layoutEffect: false,
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className="animated-circles">
            <svg width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className="circle" id="circle-1"/>
                <motion.circle cx="75" cy="50" r="20" className="circle" id="circle-2"
                style={{pathLength: scrollYProgress}}/>
                <circle cx="75" cy="50" r="10"className="circle" id="circle-3"/>
            </svg>
        </figure>
    )
}