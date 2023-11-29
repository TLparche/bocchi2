"use client";
import React, {useState, useEffect} from 'react';
import YouTubePlayer from '@/app/components/YouTubePlayer';
import NavBar from '@/app/components/NavBar'

const Firstpage = () => {
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [displayNone, setDisplayNone] = useState(false);

    const handleScroll = () => {
        const opacity = window.scrollY / 600;
        setScrollOpacity(opacity <= 0 ? 0 : opacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setHidden(true);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    const handleTransitionEnd = () => {
        if (hidden) {
            setDisplayNone(true);
        }
    };
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="h-screen w-full block relative bg-pink-300">
                <div className="absolute top-0 left-0 right-0 bg-pink-300 z-30 h-full" style={{opacity: scrollOpacity}}>
                </div>
                <div
                    className={`h-screen w-full fixed top-0 left-0 right-0 bg-pink-300 transition-opacity duration-1000 z-50 ${
                        displayNone ? 'hidden' : ''}`}
                    style={{opacity: hidden ? 0 : 1}} onTransitionEnd={handleTransitionEnd}>
                    <img src={"kessoku2.png"} alt={"/"} className={"w-full h-screen"}/>
                </div>
                <div
                    className="absolute top-0 left-0 right-0 bg-cover bg-center before:block before:pt-[56.25%] z-20 before:z-20">
                    <YouTubePlayer/>
                </div>
            </div>
        </div>
    );
};

export default Firstpage;
