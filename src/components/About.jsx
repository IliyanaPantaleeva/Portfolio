import React from 'react';
import aboutImage from '../assets/images/aboutImage.jpg';

const About = () => {
  const intro = [
    { text: 'Completed Projects', count: '05' },
    { text: 'Years experience', count: '01' },
    { text: 'Companies Work', count: '01' },
  ];
  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-indigo-500'>Me</span>
        </h3>
        <p className='text-gray-200 my-3 text-lg'>My introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-200 my-3'>
              <p className='tex-justify leading-7 w-11/11 mx-auto'>
              I am a programmer with management skills and an English sense of humor.
              In 2022 I graduated from Telerik Academy. I upgraded my knowledge and acquired
              skills related to real projects and using the following technologies JavaScript,
            React, Node.js, ES6, MUI, Firebase, Git, HTML, CSS, Object Oriented Programming,
            Data Structures and Algorithms. I had the opportunity to work on my projects,
            where I learned new technologies - TypeScript, Bootstrap, Tailwind and Vite.
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {intro.map((content) => (
                  <div key={content.text}>
                    <h2 className='md:text-4xl text-2xl font-semibold text-white'>
                      {content.count}
                      <span className='text-indigo-500'>+</span>{' '}
                    </h2>
                    <span className='md:text-2xl text-1xl '>
                      {content.text}
                    </span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href='../../public/IliyanaPantaleevaResume.pdf' download>
                <button className='btn-primary'>Download CV</button>
              </a>
            </div>
          </div>
          <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImage'>
              <img
                src={aboutImage}
                alt='About Lia'
                className='w-full object-cover bg-indigo-500 rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
