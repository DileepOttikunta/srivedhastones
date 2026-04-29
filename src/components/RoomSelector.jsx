import React from 'react';
import { LayoutGrid, Coffee, Bath, Bed } from 'lucide-react';
import { rooms } from '../marbles';

const IconMap = {
  LayoutGrid,
  Coffee,
  Bath,
  Bed
};

export default function RoomSelector({ selectedRoom, onSelect }) {
  return (
    <div className="room-selector">
      {rooms.map((room) => {
        const Icon = IconMap[room.icon];
        const isSelected = selectedRoom?.id === room.id;
        
        return (
          <button
            key={room.id}
            onClick={() => onSelect(room)}
            className={`room-btn ${isSelected ? 'active' : ''}`}
          >
            <div className={`room-icon ${isSelected ? 'active' : ''}`}>
              <Icon size={24} />
            </div>
            <span className={`room-label ${isSelected ? 'active' : ''}`}>
              {room.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
