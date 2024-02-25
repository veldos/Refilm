import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

function MainPage() {
  return (
    <div>

        <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/list" element={<MovieList />} />
      </Routes>
    
    </div>
  )
}

export default MainPage