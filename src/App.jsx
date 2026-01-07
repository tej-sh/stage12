import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import LeftScreen from "./components/LeftScreen";
import RightScreen from "./components/RightScreen"
import MainScreen from "./components/MainScreen";
import AdminPanel from "./components/AdminPanel";

function App(){
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [mainVideoSrc, setMainVideoSrc] = useState(null);
  const [leftVideoSrc, setLeftVideoSrc] = useState(null);
  const [rightVideoSrc, setRightVideoSrc] = useState(null);
  
  const mainVideoRef = useRef(null);
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + Shift + A to toggle admin panel
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsAdminVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleUploadMain = (url) => {
    setMainVideoSrc(url);
  };

  const handleUploadLeft = (url) => {
    setLeftVideoSrc(url);
  };

  const handleUploadRight = (url) => {
    setRightVideoSrc(url);
  };

  const handlePlayMain = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.play();
    }
  };

  const handlePauseMain = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.pause();
    }
  };

  const handlePlayLeft = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.play();
    }
  };

  const handlePauseLeft = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.pause();
    }
  };

  const handlePlayRight = () => {
    if (rightVideoRef.current) {
      rightVideoRef.current.play();
    }
  };

  const handlePauseRight = () => {
    if (rightVideoRef.current) {
      rightVideoRef.current.pause();
    }
  };

  const handlePauseAll = () => {
    if (mainVideoRef.current) mainVideoRef.current.pause();
    if (leftVideoRef.current) leftVideoRef.current.pause();
    if (rightVideoRef.current) rightVideoRef.current.pause();
  };

  const handleResumeAll = () => {
    if (mainVideoRef.current) mainVideoRef.current.play();
    if (leftVideoRef.current) leftVideoRef.current.play();
    if (rightVideoRef.current) rightVideoRef.current.play();
  };

  return(
    <div className="App">
      <div className="canvas">
        <LeftScreen 
          videoRef={leftVideoRef}
          customVideoSrc={leftVideoSrc}
        />
        <MainScreen 
          videoRef={mainVideoRef}
          customVideoSrc={mainVideoSrc}
        />
        <RightScreen 
          videoRef={rightVideoRef}
          customVideoSrc={rightVideoSrc}
        />
      </div>
      
      <AdminPanel
        isVisible={isAdminVisible}
        onClose={() => setIsAdminVisible(false)}
        onUploadMain={handleUploadMain}
        onUploadLeft={handleUploadLeft}
        onUploadRight={handleUploadRight}
        onPlayMain={handlePlayMain}
        onPauseMain={handlePauseMain}
        onPlayLeft={handlePlayLeft}
        onPauseLeft={handlePauseLeft}
        onPlayRight={handlePlayRight}
        onPauseRight={handlePauseRight}
        onPauseAll={handlePauseAll}
        onResumeAll={handleResumeAll}
      />
    </div>
  )
}

export default App;