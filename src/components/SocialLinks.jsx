import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const SocialLinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                  LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/vazha-koplatadze-5734a8139/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                  GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/vkopl1997',
        },
        {
            id:3,
            child:(
                <>
                  Mail <GrMail size={30}/>
                </>
            ),
            href:'mailto:foo@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                  Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download})=>(
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                <a href={href} download={download} target="_blank"  rel="noreferrer" className='flex justify-between items-center w-full text-white '>
                   {child}
                </a>
            </li>

            ))}
            
        </ul>
    </div>
  ) 
}
 