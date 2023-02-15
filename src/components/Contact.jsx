import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 
    p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get touch with me</p>
            </div>
            <div className='flex w-full justify-center items-center mx-auto'>
                <form action='https://getform.io/f/bf949f74-56bc-4cfd-865b-33243cea1fd8' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outlined-none'/>
                    <input type='text' name='email' placeholder='Enter your email'
                    className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outlined-none'/>
                    <textarea name='message' rows='10' placeholder='Enter your text... '
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outlined-none'>
                    </textarea>
                    <button className='bg-gradient-to-b from-cyan-500 to-blue-500 p-2 text-white rounded-md my-2'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}
