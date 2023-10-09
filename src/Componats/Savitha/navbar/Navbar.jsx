import React, { useState } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled]=useState(false);

  window.onscroll = () => {
     setIsScrolled(window.pageYOffset === 0 ? false : true)
     return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>News & Popular</span>
          <span>My List</span>
          <span>Browse by Language</span>
         </div>
         <div className='right'> 
                < SearchIcon className='icon'/>
                 <span>Savitha</span>
                 < NotificationsIcon className='icon' />
                 <Link to="/">
                 <img
            src="https://netflix-sass.vercel.app/images/profiles/user2.png"
            alt=""
          />
                 </Link>
          <div  className='profile'>
          <ArrowDropDownIcon  className='icon'/>
          <div className='options'>
    <span>Settings</span>
    <span>Logout</span>
          </div>
          </div>
                 
                </div>
                </div>
       </div>
  )
}

export default Navbar