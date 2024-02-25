import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Mainpage from '../Components/MainPage';
import Homepage from '../Components/Homepage';
import NavbarFooter from '../Components/NavbarFooter';
import MovieList from '../Components/MovieList';
// import SearchBar from '../Components/SearchBar';
import MoviePage from '../Components/MoviePage';

function Home() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<NavbarFooter />}>
          <Route index element={<Homepage />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/movies/:id' element={<MoviePage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Home;
