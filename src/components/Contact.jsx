import { useState, useRef} from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// template_edknvh8
// service_jbght1g
// AwGoq73tNgvcGMpV_
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({...form, [name]: value})
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs.send('service_jbght1g','template_edknvh8',
    {
      from_name: form.name,
      to_name: 'Hy Huynh',
      from_email: form.email,
      to_email: 'hyhuynh222@gmail.com',
      message: form.message
    },'AwGoq73tNgvcGMpV_'
    ).then(() => {
      setLoading(false);
      alert('Thank You');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.')
    })
};

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center'>
      <motion.div variants={slideIn('left','tween', 0.2, 1)} className='flex-[0.75] bg-black p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        


        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8 items'>
          <label className="flex flex-col" htmlFor="">
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Name ' 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className="flex flex-col" htmlFor="">
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Email' 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className="flex flex-col" htmlFor="">
            <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder='Type your message here' 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <button type='Submit' className='bg-tertiary py-3 px-8 outline-none w-fit font-white font-bold shadow-md shadow-primary rounded-xl self-center'>
            {loading ? 'Sending....' : 'sent'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')