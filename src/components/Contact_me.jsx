import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact_me = () => {
  const form = useRef();
  const contact_info = [
    { logo: 'mail', text: 'lia.pantaleeva@gmail.com' },
    {
      logo: 'location',
      text: 'Plovdiv Bulgaria',
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i9ame0f',
        'template_4p3dclm',
        form.current,
        'g3jdfZyVFVVLL877j',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section id='contacts' className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          Contact <span className='text-indigo-500'> Me</span>
        </h3>
        <p className='text-gray-200 mt-3 text-lg'>Get in touch</p>
        <div
          className='mt-10 flex md:flex-row flex-col gap-10 max-w-4xl
         bg-purple-300 md:p-6 p-2 rounded-3xl mx-auto'
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col flex-1 gap-5'
          >
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              required
            />
            <input
              type='Email'
              name='user_email'
              placeholder='Your Email Address'
              required
            />
            <input type='text' name='subject' placeholder='Subject' required />
            <textarea
              name='message'
              placeholder='Your Massage'
              rows={5}
            ></textarea>
            <button type='submit' className='btn-primary w-fit'>
              Send Message
            </button>
          </form>
          <div className='flex flex-col gap-7'>
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className='flex flex-row text-left gap-4 flex-wrap items-center'
              >
                <div
                  className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center
                 justify-center text-white bg-indigo-500 rounded-t-full'
                >
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className='md:text-base text-sm break-words'>
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_me;
