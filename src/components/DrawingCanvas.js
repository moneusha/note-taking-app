// src/components/DrawingCanvas.js
import React from 'react';

const DrawingCanvas = ({ note }) => {
  // Example: Drawing canvas implementation
  return (
    <div className="drawing-canvas">
      <p>Drawing Canvas for Note ID: {note.id}</p>
    </div>
  );
};

export default DrawingCanvas;
