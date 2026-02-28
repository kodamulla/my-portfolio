import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-white flex justify-center items-center p-4 py-20'>
      <motion.form 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        method='POST' 
        // 👇 මෙන්න මේ ලින්ක් එක තමයි නිවැරදිව තියෙන්න ඕනේ
        action="https://formspree.io/f/mojnbrpq" 
        className='flex flex-col max-w-[600px] w-full bg-slate-50 p-8 rounded-2xl shadow-xl border border-gray-100'
      >
        <div className='pb-8 text-center sm:text-left'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-slate-800'>Contact</p>
          <p className='text-slate-500 py-4 mt-2'>// Submit the form below or shoot me an email</p>
        </div>
        
        <input 
          className='bg-white border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors shadow-sm text-slate-700 placeholder-slate-400' 
          type="text" 
          placeholder='Name' 
          name='name' 
          required 
        />
        <input 
          className='my-4 bg-white border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors shadow-sm text-slate-700 placeholder-slate-400' 
          type="email" 
          placeholder='Email' 
          name='email' 
          required 
        />
        <textarea 
          className='bg-white border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors shadow-sm text-slate-700 placeholder-slate-400' 
          name="message" 
          rows="6" 
          placeholder='Message'
          required
        ></textarea>
        
        <button className='text-white bg-blue-600 hover:bg-blue-700 font-bold px-6 py-3 my-8 mx-auto flex items-center rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300'>
          Let's Collaborate
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;