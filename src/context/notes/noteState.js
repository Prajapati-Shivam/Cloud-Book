import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Get all note
  const getNotes = async () => {
    let url = `${host}/api/notes/fetchallnotes`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxOWVjYjU4ZjlmNzNmNDg3Mjk3YmNjIn0sImlhdCI6MTY3OTUwMzkzMH0.jvoQy5G2fPky1IqFh4_kwXJn6y2r66-rGfvwCSlaaJw'
      }
    });
    const data = await response.json();
    setNotes(data);
  }

  // Add note
  const addNote = async (title, description, tag) => {
    let url = `${host}/api/notes/createnote`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxOWVjYjU4ZjlmNzNmNDg3Mjk3YmNjIn0sImlhdCI6MTY3OTUwMzkzMH0.jvoQy5G2fPky1IqFh4_kwXJn6y2r66-rGfvwCSlaaJw'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const data = await response.json();
    console.log(data)
    const note = {
      title, description, tag
    }
    setNotes(notes.concat(note))
  }

  // Edit note
  const editNote = async (id, title, description, tag) => {

    let url = `${host}/api/notes/fetchusernotes/${id}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxOWVjYjU4ZjlmNzNmNDg3Mjk3YmNjIn0sImlhdCI6MTY3OTUwMzkzMH0.jvoQy5G2fPky1IqFh4_kwXJn6y2r66-rGfvwCSlaaJw'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const data = await response.json();
    console.log(data)

    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      if (note._id === id) {
        note.title = title;
        note.description = description;
        note.tag = tag;
        break;
      }
    }
  }
  // Delete note
  const deleteNote = (id) => {
    console.log('deleting note' + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;