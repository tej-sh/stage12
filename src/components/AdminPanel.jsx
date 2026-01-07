import React from 'react';
import './AdminPanel.css';

export default function AdminPanel({ 
  isVisible, 
  onClose, 
  onUploadMain, 
  onUploadLeft, 
  onUploadRight,
  onPlayMain,
  onPauseMain,
  onPlayLeft,
  onPauseLeft,
  onPlayRight,
  onPauseRight,
  onPauseAll,
  onResumeAll
}) {
  if (!isVisible) return null;

  const handleMainUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUploadMain(url);
    }
  };

  const handleLeftUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUploadLeft(url);
    }
  };

  const handleRightUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUploadRight(url);
    }
  };

  return (
    <div className="admin-panel-overlay">
      <div className="admin-panel">
        <div className="admin-header">
          <h2>Admin Panel</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="admin-content">
          <div className="admin-section">
            <h3>Options</h3>
            <div className="upload-section">
              <div className="upload-item">
                <label htmlFor="main-upload" className="upload-label">
                  Main video upload
                </label>
                <input
                  id="main-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleMainUpload}
                  className="file-input"
                />
              </div>
              
              <div className="upload-item">
                <label htmlFor="left-upload" className="upload-label">
                  Left screen vid upload
                </label>
                <input
                  id="left-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleLeftUpload}
                  className="file-input"
                />
              </div>
              
              <div className="upload-item">
                <label htmlFor="right-upload" className="upload-label">
                  Right screen vid upload
                </label>
                <input
                  id="right-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleRightUpload}
                  className="file-input"
                />
              </div>
            </div>
          </div>

          <div className="admin-section">
            <h3>Video Controls</h3>
            <div className="controls-grid">
              <button className="control-btn" onClick={onPauseAll}>
                Pause all
              </button>
              <button className="control-btn" onClick={onResumeAll}>
                Resume all
              </button>
              <button className="control-btn" onClick={onPauseLeft}>
                Pause left
              </button>
              <button className="control-btn" onClick={onPlayLeft}>
                Play left
              </button>
              <button className="control-btn" onClick={onPauseRight}>
                Pause right
              </button>
              <button className="control-btn" onClick={onPlayRight}>
                Play right
              </button>
              <button className="control-btn" onClick={onPauseMain}>
                Pause main
              </button>
              <button className="control-btn" onClick={onPlayMain}>
                Play main
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}