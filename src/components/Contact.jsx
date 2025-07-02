// import React from 'react'
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
// import { toast } from "react-toastify";
// import emailjs from '@emailjs/browser';

// const Contact = () => {

//   const [result, setResult] = React.useState("");

//   export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <div className="bg-black text-white py-20" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">Get in touch</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <div className="flex-1">
//             <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
//             from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
//             <p>I'm open to discussing web development prjectgs or partnership opportunities.</p>
//             <div className='mb-4 mt-8'>
//                 <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
//                 <a href="mailto:youremail@example.com" className='hover:underline'>
//                     ayushkalamkar41@gmail.com
//                 </a>
//             </div>
//             <div className='mb-4'>
//                 <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
//                 <span>8261824603</span>
//             </div>
//             <div className='mb-4'>
//                 <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
//                 <span>India, Maharashtra, Nagpur</span>
//             </div>
//           </div>
//           <div className='flex-1 w-full'>
//             <form  className='space-y-4'>
//                 <div>
//                     <label htmlFor="name" className='block mb-2'>Your Name</label>
//                     <input type="text" 
//                     className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400'
//                     placeholder='Enter You Name'/>
//                 </div>
//                 <div>
//                     <label htmlFor="emial" className='block mb-2'>Email</label>
//                     <input type="text" 
//                     className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400'
//                     placeholder='Enter You Email'/>
//                 </div>
//                 <div>
//                     <label htmlFor="message" className='block mb-2'>Message</label>
//                     <textarea type="text" 
//                     className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400'
//                     rows="5"
//                     placeholder='Enter You Message'/>
//                 </div>
//                 <button  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact


import React, { useRef, useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_uhewjny', 'template_r2pnkj9', form.current, {
        publicKey: 'B70ZB83JMKLLHaCnp',
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          setSending(false);
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error('FAILED...', error.text);
          setSending(false);
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Get in touch</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:ayushkalamkar41@gmail.com" className='hover:underline'>
                ayushkalamkar41@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>8261824603</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>India, Maharashtra, Nagpur</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  name="from_email"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  required
                />
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-full md:w-auto'
                disabled={sending}
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
