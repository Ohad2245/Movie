/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import './footer.scss';

import {Route ,Routes} from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
// import logo from '../../assets/tmovie.png';
import Contact from '../contact/Contact';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <Routes className="route">
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
            {/* <Link to="/Contact">Contact us</Link> */}

        <ul className="permalinks">
           <li><a href='#'>Home </a></li>
           <li><a href='/Contact'>Contact Me </a></li>
           <li><a href='#trendingMovies'>Trading Movies</a></li>
           <li><a href='#topRatedMovies'>Top Rated Movies</a></li>
           <li><a href='#trendingTV'>Trading TV</a></li>
           <li><a href='#topRatedTV'>Top Rated TV</a></li>
        </ul> 

        <div className='footer__socials'>
          <a href="https://www.facebook.com/profile.php?id=100000848391807" target="_blank" rel="noreferrer"><FaFacebookF/></a>
          <a href="https://github.com/Ohad2245" target="_blank" rel="noreferrer"><BsGithub/></a>
          <a href="https://www.linkedin.com/in/ohad-cohen-6b2393211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; All rights reserved.</small>
        </div>
        </div>
    );
}

export default Footer;