/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.scss'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react';

const Nav = () =>{
    const [activeNav, setActiveNav] = useState("#");
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#trendingMovies" onClick={() => setActiveNav('#trendingMovies')} className={activeNav === '#trendingMovies' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#topRatedMovies" onClick={() => setActiveNav('#topRatedMovies')} className={activeNav === '#topRatedMovies' ? 'active' : ''}><BiBook/></a>
            <a href="#trendingTV" onClick={() => setActiveNav('#trendingTV')} className={activeNav === '#trendingTV' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#topRatedTV" onClick={() => setActiveNav('#topRatedTV')} className={activeNav === '#topRatedTV' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav;