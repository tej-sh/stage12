import "./LeftScreen.css";

export default function LeftScreen({ videoRef, customVideoSrc }) {
  return (
    <div className="side-screen left" >
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
          <p>Left Screen</p>
        </div>
      )}
    </div>
  );
}