import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HookSample from '../hooks/HookSample';
import FooterComponent from '../components/FooterComponent';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function Home2() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Container style={{textAlign:'center'}}><Link to="/home">Home</Link></Container>
      <HookSample></HookSample>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default Home2;