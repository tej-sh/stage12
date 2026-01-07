import React from 'react';
import './MainScreen.css';

export default function MainScreen({ videoRef, customVideoSrc }) {
  return (
    <div className="main-screen">
      {customVideoSrc ? (
        <video
          ref={videoRef}
          src={customVideoSrc}
          autoPlay
          muted
          loop
          playsInline
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