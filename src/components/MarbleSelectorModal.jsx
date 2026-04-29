import React from 'react';
import { X } from 'lucide-react';
import { marbles } from '../marbles';

export default function MarbleSelectorModal({ isOpen, onClose, onSelect, selectedMarble }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="modal-content animate-slide-up">
        
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">Select Marble</h2>
          <button onClick={onClose} className="icon-btn">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          <div className="marble-grid">
            {marbles.map((marble) => (
              <button
                key={marble.id}
                onClick={() => {
                  onSelect(marble);
                  onClose();
                }}
                className={`marble-item ${selectedMarble?.id === marble.id ? 'active' : ''}`}
              >
                <div className="marble-img-wrapper">
                  <img src={marble.texture} alt={marble.name} className="marble-img" />
                  {selectedMarble?.id === marble.id && (
                    <div className="marble-selected-border"></div>
                  )}
                </div>
                <span className="marble-name">
                  {marble.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
