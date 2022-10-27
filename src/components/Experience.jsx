import React from 'react'

const Experience = () => {

const jobs = [
  {
    logo: 'earth',
    name: 'Orak Engineering LTD',
    position: 'National Key Account Manager',
    count: 17,
  },
  {
    logo: 'nuclear',
    name: 'Seven Tops BG LTD',
    position: 'Regional Manager - West Bulgaria',
   count: 25,
  
  },
  {
    logo: 'planet',
    name: 'Sadat LTD',
    position: 'Market Research and Expansion Manager',
    count: 58,
    },
]
  return (
    <section id='experience' className='py-10 px-10 '>
      <div className=' text-gray-200 text-center'>
        <div >
        <h3 className='text-4xl font-semibold'>
         <span className='text-indigo-500'> Experience </span>
        </h3>
        </div>
        <br/>
        <div className='flex items-center py-20 bg-purple-300 justify-center mt-10 gap-10 flex-wrap rounded-xl'>
          {jobs?.map((jobs,i) =>(
            <div key={i} 
            className='border-2 group border-indigo-900 relative min-w-[20rem] max-w-[20rem] bg-indigo-900 p-10 rounded-xl'
            >
              <div 
              style={{
                background: `conic-gradient(rgb(8,145,170) ${jobs.count}%,#ddd ${jobs.count}%)`,
              }}
               className='w-32 h-32 flex-center  justify-center rounded-full'
              >   
                <div className="text-6xl w-28 h-28 bg-gray-500 rounded-full flex items-center justify-center group-hover:text-indigo-500">
                  <ion-icon name={jobs.logo}></ion-icon>
                </div>
              </div>
              <h5 className='mt-3 text-gray-100' >{jobs.position} <br/> {jobs.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience