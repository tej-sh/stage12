import "./LeftScreen.css";
import { useEffect } from "react";

export default function LeftScreen({ videoRef, customVideoSrc }) {

  useEffect(() => {
    if (videoRef.current && customVideoSrc) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [customVideoSrc, videoRef]);

  return (
    <div className="side-screen left">
      {customVideoSrc ? (
        <video
          ref={videoRef}
          src={customVideoSrc}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="placeholder-screen">
          <p>Left Screen</p>
        </div>
      )}
    </div>
  );
}
