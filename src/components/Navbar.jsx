import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [gluey, setGluey] =useState(false);
  const[open, setOpen] = useState(false);
  const links = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'EXPERIENCE', link: '#experience' },
    { name: 'CONTACTS', link: '#contacts' },
  ];
  useEffect(() =>{
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    window.scrollY > 0 ? setGluey(true):setGluey(false)
  });
}, []);

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${gluey ? 'md:bg-purple-500/60 text-grey-900' : 'text-white'}`}>
      <div className='flex items-center justify-between'>
        <div className='mx-7'>
          <h3 className='text-5xl uppercase font-bold'>
            L<span className='text-purple-500'>iy</span>a
          </h3>
        </div>
        <div className={`${gluey? 'md:bg-purple-500/80 bg-purple-500' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-1 text-lg'>
            {
                links?.map((menu,i)=>(
                  <li key={i} className='px-7 hover:text-purple-500'>
                  <a href={menu?.link}>{menu?.name}</a>
                  </li>
                ))
            }
          </ul>
        </div>
        <div 
        onClick={()=> setOpen(!open)}
        className={`z-[999] ${open ? 'text-indigo-500' : 'text-gray-200'} text-3xl md:hidden m-5`}>
            <ion-icon name='menu'></ion-icon>
        </div>
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? 'right-0' : 'right-[-100%]'}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            {
              links?.map((menu,i)=>(
                <li key={i} className='px-7 hover:text-purple-500'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
