// src/components/AddNote.js
import React from 'react';

const AddNote = ({ addNote }) => {
  return (
    <div className="add-note">
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default AddNote;
