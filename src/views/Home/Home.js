import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <h1 className='text-center text-primary' >Quick Note 📓</h1>
      <p className='text-center text-gray'>
      I'm just writing a quick note. <del> Don't forget anything....</del> 👈.  Just a quick note to follow up on. {""}  
         <span  className='highlight text-secondary'>Remember Everthing!🧠</span>
      </p>

      <div className='btn-container'>
        <button className='btn btn-primary'>📝Add Notes</button>
        <button className=' btn btn-secondary'>📖View Notes</button>
      </div>
    </div>
  )
}

export default Home