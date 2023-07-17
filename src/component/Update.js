import React, { useContext } from "react";
import Modal from "./Modal";
import noteContext from "../context/notes/noteContext";

const Update = () => {
  const context = useContext(noteContext);
  const { updateNote, note, setNote, isModalOpen, setIsModalOpen } = context;
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = (e) => {
    updateNote(note.id, note.etitle, note.edescription, note.etag);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button className="hidden" onClick={handleOpenModal}>
        Open Modal
      </button>
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
                  <label
                    htmlFor="title"
                    className="title leading-7 text-md text-gray-600"
                  >
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
                  <label
                    htmlFor="tag"
                    className="leading-7 text-md text-gray-600"
                  >
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
                  disabled={
                    note.etitle.length < 3 || note.edescription.length < 3
                  }
                  className={`${
                    note.etitle.length < 3 || note.edescription.length < 3
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-md text-lg`}
                  onClick={handleSubmit}
                >
                  Edit Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Update;
