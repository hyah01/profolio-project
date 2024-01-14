import { motion } from 'framer-motion';
import { styles} from '../styles';


const Hero = () => {
  return (
    <section className='relative w-full h-[500px] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5  rounded-full bg-[#1e90ff]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1e90ff]'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#1e90ff]'>Hy</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a <span className={`${styles.heroHighlightText} text-[#82CAFF]`}>UCSD</span> graduate <br/>
            With a degree in <span className={`${styles.heroHighlightText} text-[#82CAFF]`}>Mathematical <br/>
            and Computer Science</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero