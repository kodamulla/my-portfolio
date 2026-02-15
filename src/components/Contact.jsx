import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-32'>
        
        <form method='POST' action="https://getform.io/f/ඔයාගේ_unique_key_එක" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-300 uppercase'>Contact</p>
                <p className='text-gray-400 py-4 italic'>Submit the form below or shoot me an email - hansi@example.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-sm text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-sm text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2 rounded-sm text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400' name="message" rows="10" placeholder='Message' required></textarea>
            
            <button className='text-white border-2 hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto flex items-center duration-300 font-bold uppercase tracking-widest'>
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact