import React from 'react';
import heroImage from '../assets/heroImage.png';
import { RiArrowRightSFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

export const Home = () => {
    return (
      <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold'>
              i'm Front End Developer
            </h3>
            <p className='text-gray-500 py-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl'>
              Transforming Ideas into Interactive Reality with React: A Junior Developer's Journey to Creating Cutting-Edge User Experiences
            </p>
            <div>
              <Link
                to='portfolio'
                smooth
                duration={500}
                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
              >
                Portfolio
                <span className='px-1 group-hover:rotate-90 duration-300'>
                  <RiArrowRightSFill size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div className='sm:my-1'>
            <img src={heroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 sm:w-3/4 md:w-full' />
          </div>
        </div>
      </div>
    )
  }
  