import React from 'react';
import './MainScreen.css';
import {useEffect} from 'react';

export default function MainScreen({ videoRef, customVideoSrc }) {
  useEffect(()=>{
    if (videoRef.current && customVideoSrc) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [customVideoSrc, videoRef]);
  return (
    <div className="main-screen">
      {customVideoSrc ? (
        <video
          ref={videoRef}
          src={customVideoSrc}
          muted
          loop
          playsInline
          preload="metadata"
        ></video>
      ) : (
        <div className="placeholder-screen">
          <p>Upload a video from Admin Panel</p>
          <p className="hint">Press Ctrl + Shift + A</p>
        </div>
      )}
    </div>
  );
}
