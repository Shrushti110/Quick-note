import React from 'react'
import "./HomeButton.css"
import ImgHome from "./../../assets/3d-house.png"
import{Link} from 'react-router-dom';

function HomeButton() {
  return (
    <Link to="/">
    <img src={ImgHome} alt='Home' className='home-img'></img>
    </Link>
  )
}

export default HomeButton