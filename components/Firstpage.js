import React, {useState, useEffect} from 'react';
import NavBar from '@/components/NavBar';
import YouTube from 'react-youtube';

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
                <NavBar tabName=""/>
            </div>
            <div className="h-screen w-full block relative bg-pink-300">
                <div
                    className={`absolute top-0 left-0 right-0 bg-pink-300 z-30 h-full`}
                    style={{opacity: scrollOpacity}}
                ></div>
                <div
                    className={`h-screen w-full fixed top-0 left-0 right-0 bg-pink-300 transition-opacity duration-1000 z-50 ${
                        displayNone ? 'hidden' : ''
                    }`}
                    style={{opacity: hidden ? 0 : 1}}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <img src={'kessoku2.png'} alt={'/'} className={'w-full h-screen'}/>
                </div>
                <div>
                    <div className={"h-screen w-full"}>
                        <YouTube
                            className={"h-screen"}
                            videoId="Yd8kUoB72xU"
                            opts={{
                                height: '100%',
                                width: '100%',
                                playerVars: {
                                    'mute': 1,
                                    'autoplay': 1,
                                    'controls': 0,
                                    'showinfo': 0,
                                    'rel': 0,
                                    'loop': 1,
                                    'modestbranding': 1,
                                    'disablekb': 1,
                                    'enablejsapi': 1,
                                    'iv_load_policy': 3,
                                    'widgetid': 1,
                                    'quality': 'highres',
                                    'autohide': 1,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Firstpage;
