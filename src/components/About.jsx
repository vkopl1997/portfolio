import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-scren-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl'>
                Hello! My name is Vazha Koplatadze and I am a 25 years old Junior React Developer. I have a strong foundation in HTML, CSS, JavaScript, and the React library, and I use these skills to build interactive and engaging user interfaces for web applications. My focus is always on producing high-quality code that is efficient, maintainable, and meets the needs of users.
            </p>
            <br/>
            <p className='text-xl'>
                As a Junior React Developer, I am passionate about my work and eager to continue learning and expanding my skillset. I believe that my attention to detail and commitment to excellence set me apart from others in my field, and I am confident that I have the drive and determination to succeed as a software developer.
            </p>
            <br/>
            <p className='text-xl'>
                I look forward to contributing my skills and experience to a team and working on exciting projects that challenge me and allow me to grow professionally. I am eager to take on new challenges and continuously improve my skills, and I believe that I have the potential to make a real impact in the world of software development.
            </p>
        </div>
    </div>
  )
}