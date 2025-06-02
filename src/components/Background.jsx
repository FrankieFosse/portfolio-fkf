import React, { useRef, useEffect, useState } from 'react';

function Background() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate = 0.5;

      const handleCanPlay = () => setVideoLoaded(true);
      video.addEventListener('canplay', handleCanPlay);

      return () => video.removeEventListener('canplay', handleCanPlay);
    }
  }, []);

  return (
    <div
      className="background-video"
      style={{
        filter: 'brightness(50%) blur(5px)',
        backgroundImage: videoLoaded ? 'none' : 'url(/images/PortfolioBackground2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
        style={{ display: videoLoaded ? 'block' : 'none' }}
      >
        <source src="/images/BackgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Background;
