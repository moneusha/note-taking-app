// src/components/NoteList.js
import React from 'react';

const NoteList = ({ notes, setCurrentNote, deleteNote }) => {
  return (
    <div className="note-list">
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <div onClick={() => setCurrentNote(note)}>
              {note.text}
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
