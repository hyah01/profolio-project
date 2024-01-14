import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant} from '../utils/motion'


const ProjectCard = ({index, name, description, tags, image, source_code_link, demo_code_link}) => {
  return (
    <Tilt options={{max: 45, scale: 1, speed: 450}} className="xs:w-[360px] w-full">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="p-[1px] rounded-2xl green-pink-gradient shadow-card" >
        <div className='bg-tertiary p-4 rounded-2xl'>
          <div onClick={() => window.open(demo_code_link, "_blank")} className=' relative h-[250px] cursor-pointer'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt="gitHub" className='object-contain' />
              </div>
            </div>
          </div>

          <div className='mt-5 h-[120px]'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        </motion.div>
      </Tilt>
    
  )
}

const Works = () => {
  return (
    <>
      <div className='absolute flex flex-col justify-end items-center mt-5 left-7'>
          <div className='w-5 h-5  rounded-full bg-[#1e90ff]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1e90ff]'/>
        </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my front end projects</p>
        <h2 className={styles.sectionHeadText}>Front End Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
          These are my Front End projects showcasing my skills and experience.
          They also show case which technologies I used in each project to show case my understanding of them.
          Each project cards are links to the code live demos and the github
          icon on the top right of each project are links to the code repositories.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'> 
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper( Works, "")