import "./LeftScreen.css";
import {useEffect} from "react";
export default function RightScreen({ videoRef, customVideoSrc }) {
    useEffect(()=>{
        if (videoRef.current && customVideoSrc) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
    }, [customVideoSrc, videoRef]);
    return(
        <div className="side-screen right">
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
                    <p>Right Screen</p>
                </div>
            )}
        </div>
    )
}
