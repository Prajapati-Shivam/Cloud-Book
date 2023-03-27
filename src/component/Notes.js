import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import Modal from './Modal';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, updateNote } = context;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "Personal" })

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line 
  }, [])

  const ref = useRef(null);
  const editNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }
  const handleSubmit = (e) => {
    updateNote(note.id, note.etitle, note.edescription, note.etag);
    setIsModalOpen(false);
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  // key={note.id} change in future
  return (
    <div className="flex flex-col text-center w-full mb-12">
      <AddNote />
      <button ref={ref} className='hidden' onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="container p-5">
          <div className="flex justify-between w-full mb-4">
            <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900">
              Edit Note
            </h1>

            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-400 hover:text-white focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          <div className="mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="title" className="title leading-7 text-md text-gray-600">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="etitle"
                    value={note.etitle}
                    onChange={handleChange}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="tag" className="leading-7 text-md text-gray-600">
                    Tag
                  </label>
                  <input
                    type="text"
                    id="tag"
                    name="etag"
                    value={note.etag}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="desc"
                    className="leading-7 text-md text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    id="desc"
                    name="edescription"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={note.edescription}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  disabled={note.etitle.length < 3 || note.edescription.length < 3}
                  className={`${note.etitle.length < 3 || note.edescription.length < 3?'cursor-not-allowed':'cursor-pointer'}flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-md text-lg`}
                  onClick={handleSubmit}
                >
                  Edit Note
                </button>

              </div>
            </div>
          </div>
        </div>
      </Modal>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Your Notes
      </h1>
      {notes.length === 0 && 'No notes to display. Try adding some notes.'}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {notes.map((note, index) => { return <NoteItem note={note} editNote={editNote} key={index} /> })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Notes