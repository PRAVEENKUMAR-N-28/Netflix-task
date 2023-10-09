import React from 'react';
import "./Css/First_page.css"
import Home from './Home';
import {Routes , Route ,Link} from 'react-router-dom';

const First_page = () => {
  return (
    <div className='First_Page'>
        <div className="Title_first_page">
            <h2>Who's Watching?</h2>
            
        </div>
        <div className="avathar_logo">
            <Link to="Home">
                <figure>
                    <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png" alt="" className='img_2' />
                    <figcaption>Praveen</figcaption>
                </figure>     
            </Link>
            <Link to="Jai">
                <figure>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className='img_2' />
                    <figcaption>Jaiser</figcaption>
                </figure>     
            </Link>
            <Link to="kiruthika">
                <figure>
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" className='img_2' />
                    <figcaption>kiruthika</figcaption>
                </figure>     
            </Link>
            <Link to="Lobiya">
                <figure>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" className='img_2' />
                    <figcaption>Lobiya</figcaption>
                </figure>     
            </Link>
            <Link to="Savitha">
                <figure>
                    <img src="https://netflix-sass.vercel.app/images/profiles/user2.png" alt="" className='img_2' />
                    <figcaption>Savitha</figcaption>
                </figure>     
            </Link>
         
                       
            <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bEnU657Mf7i7QpDlUW4I6ay3BO6lGFMCiQ&usqp=CAU" alt="" className='img_2' />
                <figcaption>Add Account</figcaption>
            </figure>            
        </div>
        <div className="button_1">
            <button className='button_1' >Manage Account</button>
        </div>
        
    </div>
    
  )

}

export default First_page