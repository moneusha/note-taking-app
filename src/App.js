import React, { useEffect, useState } from 'react';
import DrawingCanvas from './components/DrawingCanvas';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import './styles.css';

const App = () => {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || []);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = { id: Date.now(), text: '', drawing: '' };
    setNotes([...notes, newNote]);
    setCurrentNote(newNote);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
    setCurrentNote(null);
  };

  return (
    <div className="app">
      <NoteList notes={notes} setCurrentNote={setCurrentNote} addNote={addNote} deleteNote={deleteNote} />
      {currentNote && <NoteEditor note={currentNote} updateNote={updateNote} />}
      {currentNote && <DrawingCanvas note={currentNote} updateNote={updateNote} />}
    </div>
  );
};

export default App;
