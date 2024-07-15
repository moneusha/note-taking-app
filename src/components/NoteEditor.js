import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NoteEditor = ({ note, updateNote }) => {
  const handleChange = (value) => {
    updateNote({ ...note, text: value });
  };

  return (
    <div className="note-editor">
      <ReactQuill value={note.text} onChange={handleChange} />
    </div>
  );
};

export default NoteEditor;
