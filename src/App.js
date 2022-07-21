/* eslint-disable react/jsx-no-undef */
// import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import {Route, Routes } from 'react-router-dom';

import Catalog from "./pages/Catalog";
import Detail from "./pages/detail/Detail";
import Home from "./pages/Home";
import Layout from './components/Layout'
// import HeroSlide from './components/hero-slide/HeroSlide';
// import MovieList from './components/movie-list/MovieList';
// import MovieCard from './components/movie-card/MovieCard';
// import MovieGrid from './components/movie-grid/MovieGrid';

function App() {
    return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
            {/* <Route path="/:category/search/:keyword" element={<Catalog />}/> */}
             <Route path="/movie" element={<Catalog/>}/>
             <Route path="/tv" element={<Catalog />} />
                <Route path="/:category/:id" element={<Detail/>}/>
                <Route path=":id" element={<Detail/>} />
                {/* <Route path="/tv" element={<MovieCard/>} /> */}

        </Route>
        {/* <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" component={Detail} />
        <Route path="/:category" component={Catalog} />
        <Route path="/" exact component={Home} />
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <Routes />
              <Footer />
            </>
          )}
        /> */}
        
        </Routes>
    );
}

export default App;



  
