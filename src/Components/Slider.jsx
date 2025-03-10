
import React, { useEffect, useState, useRef } from 'react';
import GlobalAPI from '../Services/GlobalAPI';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVedios.then(resp => {
            setMovieList(resp.data.results);
        });
    };

    const sliderRight = () => {
        if (elementRef.current) {
            const imageWidth = elementRef.current.firstChild.offsetWidth; // Get the width of the first image
            elementRef.current.scrollLeft += imageWidth; // Scroll by the width of the image
        }
    };

    const sliderLeft = () => {
        if (elementRef.current) {
            const imageWidth = elementRef.current.firstChild.offsetWidth; // Get the width of the first image
            elementRef.current.scrollLeft -= imageWidth; // Scroll by the width of the image
        }
    };

    return (
        <div>
            <BsChevronCompactLeft
                className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
                onClick={sliderLeft}
            />
            <BsChevronCompactRight
                className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
                onClick={sliderRight}
            />

            <div
                className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
                ref={elementRef}
            >
                {movieList.map((item) => (
                    <img
                        key={item.id}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className="min-w-full sm:h-[310px] object-cover object-left-top mr-5 rounded-md
                        hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
                        alt={item.title || 'Movie'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
