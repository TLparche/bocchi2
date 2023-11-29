import React, {useEffect} from 'react';

const YouTubePlayer = () => {
    const videoId = 'Yd8kUoB72xU'

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(script);

        script.onload = () => {
            window.onYouTubeIframeAPIReady = () => {
                handleLoad();
            };
        };

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);


    const handleLoad = () => {
        videoOn();
    };

    const videoOn = () => {
        const videoContainerId = 'video';
        const videoContainer = document.getElementById(videoContainerId);
        videoContainer.innerHTML = '';

        youtubeIfame(videoId, videoContainerId);
    };

    const youtubeIfame = (vId, containerId) => {
        const videoContainer = document.getElementById(containerId);

        new window.YT.Player(videoContainer, {
            height: 'auto',
            width: '100%',
            videoId: vId,
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
                'autohide': 1
            },
            events: {
                'onReady': onPlayerReady,
            }
        });
    };

    const onPlayerReady = (event) => {
        event.target.playVideo();
        event.target.setPlaybackQuality('hd1080');
    };

    return (
        <div
            id="video"
            className="absolute min-w-full min-h-screen w-auto h-auto pointer-events-none -translate-x-1/2 top-0 left-1/2"
        ></div>
    );
};

export default YouTubePlayer;
