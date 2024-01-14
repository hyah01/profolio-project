import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
    
    <div className='absolute flex flex-col justify-end items-center mt-5 left-7'>
          <div className='w-5 h-5  rounded-full bg-[#1e90ff]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1e90ff]'/>
        </div>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Technology that I know</p>
      <h2 className={styles.sectionHeadText}>Technologies</h2>
    </motion.div>

    <motion.div variants={textVariant()}>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <img src={technology.icon}/> */}
            <BallCanvas icon={technology.icon} />
          </div>

        ))}
      </div>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "")