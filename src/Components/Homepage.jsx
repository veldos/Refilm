// Homepage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Search from './SearchBar';
import styled from 'styled-components';

const Section = styled.div`
  height: 60vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Title = styled.h1`
  font-size: 65px;
  
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const CiBut = styled.button`
    background-color: #2e242a;
    color: white;
    font-weight: 500;
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;

function Homepage() {
  return (
    <Section>
        <>
            <Title>relfilm</Title>
            <Search/> 
            <Link to='/movies'>
                <CiBut>view Full Site</CiBut>
            </Link>
        </>
    </Section>
  );
}

export default Homepage;
