import React from 'react';
import './App.css';

import Logo from '../components/template/logo/Logo';
import NavBar from '../components/template/nav/Nav';
import Footer from '../components/template/footer/Footer';

export default props =>
<div className="app">
  <Logo />
  <NavBar />
  <Footer />
</div>