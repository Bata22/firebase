import React from 'react';

import './App.css';
import Row from './Row';

import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     
      <Nav/>
      <Banner/> 
     <Row title="NETFILX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
     isLargerow ={true} //Ako ga samo ostavim ovako po defoltnim podesavanjima on racuna kao da pise isLargegrow={true}
     />
     <Row title="Trending now" fetchUrl={requests.fetchTrending} />
     <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;
