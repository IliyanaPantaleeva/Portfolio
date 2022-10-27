import React from 'react';
import lia from '../assets/images/home.jpg';

const Scroll = () => {
  const contact_media = [
    { icon: 'logo-facebook', link: 'https://www.facebook.com/ipantaleeva/' },
    {
      icon: 'logo-linkedin',
      link: 'https://bg.linkedin.com/in/iliyana-pantaleeva-260481221?trk=people-guest_people_search-card',
    },
    { icon: 'logo-twitter', link: 'https://twitter.com/lia_iliyana?t=oHv8lQlMUDIMNDmW06tQjQ&s=09' },
  ];
  return (
    <section
      id='home'
      className='min-h-screen flex py-10 md:flex-row flex-col items-center'
    >
      <div className='flex-1 flex items-center justify-center h-full'>
        <img
          src={lia}
          alt='Lia'
          className='md:w-11/12 h-full object-cover rounded-full'
        />
      </div>
      <div className='flex-1 '>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-indigo-500 md:text-6xl text-5xl'>
              Hello!
              <br />
            </span>
            My Name is <span>Iliyana Pantaleeva</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-indigo-500'>
            Front-End Developer
          </h4>
          <button className='btn-primary mt-8'>Contact Me</button>
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
            {contact_media?.map((info, i) => (
              <div 
                key={i}
                className='text-white hover:text-purple-400 cursor-pointer'
              >
                <a  href={info.link} target='_blank'>
                  <ion-icon name={info.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scroll;
