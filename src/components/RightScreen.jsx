import "./LeftScreen.css"

export default function RightScreen({ videoRef, customVideoSrc }) {
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