import React from 'react';
import './Css/Home.css'
import Nav1 from './Nav1';
import Banner from './Banner';
import Row from './Row';
import requsests from '../helpers/requsests';





const kiruthika = () => {
  return (
    <div>
    <Nav1 />
    <Banner />

    <div style={{textAlign:"center"}}>
    <Row
    
    title="NETFLIX ORIGINALS"
    fetchUrl={requsests.fetchNetflixOriginals}
    isLarge
    
  />
  <Row title="Tranding Now" fetchUrl={requsests.fetchTrending} />
  <Row title="Top Rating" fetchUrl={requsests.fetchTopRated} />
  <Row title="Action Movies" fetchUrl={requsests.fetchActionMovies} />
  <Row title="Comedy Movies" fetchUrl={requsests.fetchComedyMovies} />
  <Row title="Horror Movies" fetchUrl={requsests.fetchHorrorMovies} />
  <Row title="Romance Movies" fetchUrl={requsests.fetchRomanceMovies} />
  <Row title="Documentaries" fetchUrl={requsests.fetchDocumentaries} />
    </div>
</div>
  )
}

export default kiruthika