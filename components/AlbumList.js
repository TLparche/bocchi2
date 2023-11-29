import React from 'react';

const AlbumList = ({ album, text }) => {
    return (
        <li className="relative w-full max-w-[50%] box-border flex-[0_0_25%] aspect-square overflow-hidden">
            <div className="w-full h-full transform transition-transform hover:scale-110 duration-500 relative">
                <img className="w-full h-auto block" src={album} alt="x" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-500 hover:opacity-100">
                    <p className="text-white font-bold">{text}</p>
                </div>
            </div>
        </li>
    );
};

export default AlbumList;
