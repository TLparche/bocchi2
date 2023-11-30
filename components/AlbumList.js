import React, { useState, useEffect, useRef } from 'react';

const AlbumList = ({ album, text }) => {
    const albumRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
        const element = albumRef.current;
        if (!element || hasAnimated) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const triggerHeight = windowHeight * 0.8;

        if (rect.top <= triggerHeight) {
            element.classList.add('opacity-100', 'transition-all', 'duration-1000', 'transform', 'translate-y-0');
            setHasAnimated(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated]);

    return (
        <li
            ref={albumRef}
            className="relative w-full max-w-[50%] box-border flex-[0_0_25%] aspect-square overflow-hidden opacity-0 transform -translate-y-10"
        >
            <div className="w-full h-full relative">
                <img className="w-full h-auto block" src={album} alt="x" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <p className="text-white font-bold">{text}</p>
                </div>
            </div>
        </li>
    );
};

export default AlbumList;
