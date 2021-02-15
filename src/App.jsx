import React, { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import Header from './components/Header/Header';
import List from './components/List/List';
import FormAdd from './components/FormAdd/FormAdd';

export default function App() {
  const initialNotes = [
    { id: nanoid(), date: '2000-01-01', km: 300 },
    { id: nanoid(), date: '2001-11-15', km: 400 },
  ];
  const [notes, setNotes] = useState(initialNotes);

  const formActions = {
    add: 'add',
    edit: 'edit',
  };

  const handleAddNote = (newNote) => {
    const indexOfDate = notes.findIndex((item) => item.date === newNote.date);
    if (indexOfDate === -1) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      setNotes((prevNotes) => {
        const newNotes = [...prevNotes];
        newNotes[indexOfDate].km += newNote.km;
        return newNotes;
      });
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <FormAdd formAction={formActions.edit} onSubmit={handleAddNote} />
      <List notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}
