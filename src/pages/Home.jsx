import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-5">
                    <div className="section__header mb-2">
                        <h2 className='text-3xl text-yellow-400'>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small mb-3">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-5">
                    <div className="section__header mb-2">
                        <h2 className='text-3xl text-yellow-400'>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small mb-3">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-5">
                    <div className="section__header mb-2">
                        <h2 className='text-3xl text-yellow-400'>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small mb-3">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-5">
                    <div className="section__header mb-2">
                        <h2 className='text-3xl text-yellow-400'>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small mb-3">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;