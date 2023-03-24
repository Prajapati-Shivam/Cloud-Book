import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line 
  }, [])
  // key={note.id} change in future
  return (
    <div className="flex flex-col text-center w-full mb-12">
      <AddNote />
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Your Notes
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {notes.map((note, index) => { return <NoteItem note={note} key={index} />})} 
          </div>
        </div>
      </section>
    </div>
  )
}

export default Notes