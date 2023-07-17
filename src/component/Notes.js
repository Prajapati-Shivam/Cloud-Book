import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import Update from './Update';

const Notes = () => {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="flex flex-col text-center w-full">
      <AddNote />
      <Update />
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Your Notes
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {
              notes.length === 0 ? 'No notes to display. Try adding some notes.' :
              notes.map((note, index) => { return <NoteItem note={note} key={note._id} /> })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Notes