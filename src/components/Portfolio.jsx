import React from 'react';
import ecomerse from '../assets/portfolio/ecomerse.jpg';
import ninjafight from '../assets/portfolio/ninjafight.jpg';
import todo from '../assets/portfolio/todo.jpg';
import carrepair from '../assets/portfolio/carrepair.jpg';
import burascores from '../assets/portfolio/burascores.jpg';
import loginsignup from '../assets/portfolio/loginsignup.jpg';
import { RiArrowRightSFill } from 'react-icons/ri';




export const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      src:ninjafight,
      link:'https://github.com/vkopl1997/fight'
    },
    {
      id:2,
      src:ecomerse,
      link:'https://github.com/vkopl1997/finalProject-react'
    },
    {
      id:3,
      src:carrepair,
      link:'https://github.com/vkopl1997/final-project'
    },
    {
      id:4,
      src:todo,
      link:'https://github.com/vkopl1997/todoreact'
    },
    {
      id:5,
      src:burascores,
      link:'https://github.com/vkopl1997/bura-score-calculator'
    },
    {
      id:6,
      src:loginsignup,
      link:'https://github.com/vkopl1997/loginformreact'
    },
  ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white
    md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-5'>Check out some of my work here</p>
        </div>
        
        <div className='grid sd:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          { portfolios.map(({id,src,link})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='ddd' className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                {/* <button className='w-1/2 py-3 px-6 m-4 duration-200 hover:scale-105' >demo</button> */}
                <a href={link} target='_blank' rel="noreferrer" className='w-1/2 py-3 px-6 
                m-4 duration-200 hover:scale-105'>
                  <button className='group flex bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-md py-1 px-4'>
                    code
                    <span className='px-1 group-hover:ml-[4px] duration-300'>
                            <RiArrowRightSFill size={25}/>
                        </span>
                  </button></a>
              </div> 
            </div>
          )) }
          
        </div>
      </div>
    </div>
  )
}
