import React from 'react';
import './Css/Home.css'
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requsests from '../helpers/requsests';

const Home = () => {
  return (
    <div>
        <Nav />
        <Banner />

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
  )
}

export default Home