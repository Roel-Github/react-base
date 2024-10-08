import React from 'react';
import '../App.css';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Outlet, Link } from "react-router-dom";
import { Container } from '@mui/material';

function Home() {
  return (
    <>   
      <HeaderComponent></HeaderComponent>
      <Container style={{textAlign:'center'}}><Link to="/login">Login</Link></Container>
      <FooterComponent></FooterComponent>
      <Outlet />
    </>
  )
}

export default Home;
