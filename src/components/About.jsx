import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// const ServiceCard = ({index, title, icon}) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
//         <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
//           <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
//           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

const About = () => {
  return (
    <>

        <div className='absolute flex flex-col justify-end items-center mt-5 right-24'>
          <div className='w-5 h-5  rounded-full bg-[#1e90ff]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1e90ff]'/>
        </div>
    <motion.div variants={textVariant()} className={`${styles.paddingX} inset-0 top-[500px] max-w-7xl mx-auto flex flex-col items-end`}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    
    <div className={`${styles.paddingX} inset-0 max-w-7xl mx-auto  flex flex-col items-end`}>
      <motion.p variants={fadeIn("","",0.1, 1)} className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a recent graduate with knowledge in Python,
      C++, Java, and JavaScript. I also have some 
      experience using frameworks like React, Bootstrap,
      and JQuery. I am a quick learner and actively 
      seek new technology to improve myself and keep 
      up-to-date with the technologies I already know. 
      I work well with others on multidisciplinary team 
      projects and strive to find creative solutions to 
      any problems that arise while keeping code clean 
      and concise. I am eager to apply my knowledge in 
      my future work and continue to learn and develop.
      </motion.p>
    </div>
    {/* <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={ServiceWorker.title} index=
        {index} {...service}/>
      ))}
    </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")