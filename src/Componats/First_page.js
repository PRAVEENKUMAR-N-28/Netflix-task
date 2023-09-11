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
            <Link to="Home">
                <figure>
                    <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png" alt="" className='img_2' />
                    <figcaption>Praveen</figcaption>
                </figure>     
            </Link>
            <Link to="Home">
                <figure>
                    <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png" alt="" className='img_2' />
                    <figcaption>Praveen</figcaption>
                </figure>     
            </Link>
            <Link to="Home">
                <figure>
                    <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png" alt="" className='img_2' />
                    <figcaption>Praveen</figcaption>
                </figure>     
            </Link>
            <Link to="Home">
                <figure>
                    <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png" alt="" className='img_2' />
                    <figcaption>Praveen</figcaption>
                </figure>     
            </Link>
            <Link to="Home">
                <figure>
                    <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png" alt="" className='img_2' />
                    <figcaption>Praveen</figcaption>
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