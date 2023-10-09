import React, { useEffect, useState } from 'react';
import './Css/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {

   const [show, setShow] = useState(false)

   const transitionNavbar =() =>{
    if (window.scrollY > 100){
      setShow(true)
    } else{
      setShow(false)
    }
   };

   useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return() => window.removeEventListener("scroll" , transitionNavbar)
   }, []);
   
  return (
     
    <div className={`nav ${show && "nav_black"}`}>

      
        <div className='nav_content'>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt=""
            className='nav_logo' 
            />
            <Link to="/"><img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='' className='nav_avatar' /></Link>
        </div>
        

    </div>
  )
}

export default Nav