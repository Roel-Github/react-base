import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import LoginPageComponent from '../components/LoginPageComponent';
import FooterComponent from '../components/FooterComponent';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Container style={{textAlign:'center'}}><Link to="/home">Home</Link></Container>
      <LoginPageComponent></LoginPageComponent>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default LoginPage;