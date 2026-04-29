import React, { useState, useRef } from 'react';
import { Download, Layers, MonitorUp, Pipette } from 'lucide-react';
import MarbleSelectorModal from './components/MarbleSelectorModal';
import RoomSelector from './components/RoomSelector';
import Scene3D from './components/Scene3D';
import { marbles, rooms } from './marbles';
import './App.css';

export default function MarbleStudio() {
  const [selectedMarble, setSelectedMarble] = useState(marbles[0]);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTopView, setIsTopView] = useState(false);
  const [wallColor, setWallColor] = useState('#f8fafc');
  const canvasRef = useRef();

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `marble-design-${selectedRoom.id}-${selectedMarble.id}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  return (
    <div className="app-container animate-fade-in">
      <header className="header">
        <div className="header-left">
          <div>
            <h1 className="title">Marble Studio</h1>
            <p className="subtitle">Visualize premium flooring in 360°</p>
          </div>
        </div>
      </header>

      <main className="main-content flex-layout animate-slide-up">
        {/* Left Sidebar */}
        <aside className="sidebar left-sidebar">
          <h3 className="sidebar-title">Select Room</h3>
          <RoomSelector 
            selectedRoom={selectedRoom} 
            onSelect={setSelectedRoom} 
          />
        </aside>

        {/* Center */}
        <div className="scene-container">
          <Scene3D 
            ref={canvasRef}
            selectedMarble={selectedMarble} 
            selectedRoom={selectedRoom}
            isTopView={isTopView}
            wallColor={wallColor}
          />
          
          <div className="download-btn-container">
            <button onClick={handleDownload} className="glass-btn glass-panel">
              <Download size={20} />
              <span>Download View</span>
            </button>
          </div>
          
          <div className="current-selection glass-panel">
             <img src={selectedMarble.texture} className="swatch-img" alt="swatch" />
             <div className="label-container">
               <span className="label-sm">Current</span>
               <span className="label-md">{selectedMarble.name}</span>
             </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="sidebar right-sidebar">
          <h3 className="sidebar-title">Controls</h3>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="primary-btn w-full justify-center"
          >
            <Layers size={20} />
            <span>Change Marble</span>
          </button>

          <button
            onClick={() => setIsTopView(!isTopView)}
            className={`glass-btn glass-panel w-full justify-center ${isTopView ? 'active-view-btn' : ''}`}
          >
            <MonitorUp size={18} />
            <span>{isTopView ? '360° View' : 'Top View'}</span>
          </button>

          <div className="color-picker-wrapper glass-panel flex-col-full">
            <div className="flex-row-center w-full gap-2">
              <Pipette size={18} />
              <span>Wall Color</span>
            </div>
            
            <div className="flex-row-center w-full gap-2">
              <input 
                type="color" 
                value={wallColor}
                onChange={(e) => setWallColor(e.target.value)}
              />
              <input 
                type="text" 
                value={wallColor}
                onChange={(e) => setWallColor(e.target.value)}
              />
            </div>
          </div>
        </aside>
      </main>

      <MarbleSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={setSelectedMarble}
        selectedMarble={selectedMarble}
      />
    </div>
  );
}