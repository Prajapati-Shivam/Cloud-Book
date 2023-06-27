import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
const Addnote = () => {
  const context = useContext(noteContext)
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag = "Personal");
    setNote({ title: "", description: "", tag: "" })
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div className="container px-5 py-10">
      <div className="flex flex-col w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Add notes
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Fill in the details to add a new note.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="title" className="leading-7 text-md text-gray-600">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={note.title}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                name="tag"
                value={note.tag}
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
                name="description"
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                value={note.description}
                required
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              disabled={note.title.length < 3 || note.description.length < 3}
              className={`${note.title.length < 3 || note.description.length < 3?'cursor-not-allowed':'cursor-pointer'} flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
              onClick={handleSubmit}
            >
              + Add Note 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addnote