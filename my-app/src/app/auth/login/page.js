import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-2xl text-green-500 bg-amber-300'>This is the login Page:</h1>
      <div className='container mx-auto px-6'>
        <form action="">
            <input type='email' className='border w-full my-1 rounded-2xl'></input>
            <input type='password' className='border w-full my-1 rounded-2xl'></input>
            <input type='submit' className='border w-full my-1 rounded-3xl'></input>
        </form>
      </div>
    </div>
  )
}

export default page
