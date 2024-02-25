import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  margin-bottom: 5em;
  align-items: center;
  justify-content: center;
  /* background-color: #1b1d38; */

`;
const Ite = styled.div`
   align-items: center;
   margin: 20px;
`;
const Item1 = styled(Link)`
  text-decoration: white;
  &:hover {
      position: absolute;
      width: auto;
      padding: 0.6rem;
      margin: auto;
      top:1rem;
      background: #151b20;
      border-radius: 0.6rem;
      box-sizing: border-box;
      box-shadow: 
      rgba(29,178,243,.04) 0 24px 48px -4px, 
      rgba(29,178,243,.04) 0 12px 24px -4px,
      rgba(29,178,243,.04) 0 8px 16px -4px,
      rgba(29,178,243,.04) 0 4px 8px -2px,
      rgba(29,178,243,.64) 0 0 1px 0,
      rgba(29,178,243,.04) 0 48px 96px -4px;
    }
`;





function NavbarFooter() {
  return (
    <Fragment>
      <Container> 
            <Ite className='deco'>
            <Item1  to="/">Home</Item1></Ite>
            <Ite className='deco'>
            <Item1  to="/genres">Genre</Item1> </Ite>
            <Ite className='deco'>
            <Item1  to="/top-imdb">Top IMDb</Item1>
            </Ite>         
      </Container>
      <Outlet />
    </Fragment>
  );
}

export default NavbarFooter;
