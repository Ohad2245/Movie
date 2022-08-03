import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
// import Nav from './nav/Nav';

const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer/> 
      </>
    );
}

export default Layout;