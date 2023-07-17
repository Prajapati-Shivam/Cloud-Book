import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Modal from "./Modal";

const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote, addModalOpen, setAddModalOpen } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleOpenModal = () => setAddModalOpen(true);
  const handleCloseModal = () => setAddModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag=== "" ? "Personal" : note.tag);
    setNote({ title: "", description: "", tag: "" });
    setAddModalOpen(false);
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button className="hidden" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal isOpen={addModalOpen} onClose={handleCloseModal}>
        <div className="container p-2 sm:p-5">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="sm:text-2xl text-xl font-medium title-font text-gray-900">
              Add Note
            </h2>

            <button
              type="button"
              className="w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-400 hover:text-white focus:outline-none sm:mt-0 sm:ml-3 sm:text-sm"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          <div className="mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="title"
                    className="title leading-7 text-md text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="tag"
                    className="leading-7 text-md text-gray-600"
                  >
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
                    defaultValue={note.description}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  disabled={
                    note.title.length < 3 || note.description.length < 3
                  }
                  className={`${
                    note.title.length < 3 || note.description.length < 3
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-md text-lg`}
                  onClick={handleSubmit}
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Addnote;
