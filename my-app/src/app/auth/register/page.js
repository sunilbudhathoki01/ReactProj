import React from 'react'

const page = () => {
  return (
  <div>
<h2 className='text-4xl font-bold- text-center text-red-900 text-semibold'>This is the register page</h2>
    <div className='container mx-auto px-6'>
        <form action="">
            <input type='text' className='border w-full my-2 rounded-2xl'></input>
            <input type='email' className='border w-full my-2 rounded-2xl'></input>
            <input type='password' className='border w-full my-2 rounded-2xl'></input>
            <input type='submit' className='border w-full my-2 rounded-2xl'></input>
            
        </form>


        </div>
    </div>
  )
}

export default page
