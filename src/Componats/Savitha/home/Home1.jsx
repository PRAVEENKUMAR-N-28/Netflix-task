

import Comedies from '../comedies/Comedies'
import Featured from '../featured/Featured'
import List from '../list/List'
 import Movies from '../movies/Movies'
import Navbar from '../navbar/Navbar'
import Swiper from  '../swiper/Swiper'
 import Animation from '../animation/Animation'
 import Documentries from '../documentries/Documentries'
import Tvshows from '../tvshows/Tvshows'
import Toprated from '../toprated/Toprated'
import './home.css'

const Home1 = () => {
  return (
    <div className='home'>
         <Navbar/>
         <Featured/>
         <List/>
        <Toprated/>
        <Swiper/>
        <Tvshows/>
       <Movies/>
       <Comedies/> 
       <Animation/> 
        <Documentries/> 
        
    </div>
         
  )
}

export default Home1