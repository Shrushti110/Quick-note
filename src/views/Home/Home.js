import React from 'react'
import './Home.css'
import ImgSecure from "./shield.png"
import ImgHeart from "./social-media.png"
import ImgBrain from "./brain.png"
import FeatureCard from '../../components/FeatureCard/FeatureCard'

function Home() {
  return (
    <div>
      <h1 className='text-center text-primary app-title' >Quick Note 📓</h1>
      <p className='text-center text-gray'>
        I'm just writing a quick note. <del> Don't forget anything....</del> 👈.  Just a quick note to follow up on. {""}  
        <span  className='highlight text-secondary description'>Remember Everthing!🧠</span>
      </p>
    <div>
    <h3 className='text-center'>Why choose a Quick Note for urgent updates?</h3>
      
    <div className='feature-container'>
      <FeatureCard
        featureImg={ImgSecure}
        featureText="Notes will be securely saved in your browser's local storage.🔐"/>
      
      <FeatureCard
        featureImg={ImgBrain}
        featureText="How does using a quick note help keep your brain focused and organized?🧠"/>
      
      <FeatureCard
        featureImg={ImgHeart}
        featureText=" A quick note is loved by people for its clarity and brevity. 💌"/>

        
    </div>
    </div>

      <div className='btn-container'>
        <button className='btn btn-primary'>📝Add Notes</button>
        <button className=' btn btn-secondary'>📖Show Notes</button>
      </div>
    </div>
  )
}

export default Home