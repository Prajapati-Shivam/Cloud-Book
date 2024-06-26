import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import { SquarePen, Trash } from 'lucide-react';
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;
  const { note } = props;
  const [click, setClick] = useState(false);

  const date = new Date(note.date);
  return (
    <div className='w-full sm:w-1/3 group' onClick={() => setClick(!click)}>
      <div className=' bg-gray-100 border-2 hover:border-black hover:bg-gray-200 transition-all duration-300 bg-opacity-75 p-4 sm:p-6 rounded-lg overflow-hidden relative shadow-md'>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='tracking-widest text-sm title-font font-medium text-gray-500 uppercase'>
            {note.tag}
          </h2>
          {
            <div className='hidden group-hover:flex justify-center gap-x-3 cursor-pointer'>
              <SquarePen
                onClick={() => editNote(note)}
                className='hover:text-gray-500'
              />
              <Trash
                onClick={() => deleteNote(note._id)}
                className='hover:text-red-500'
              />
            </div>
          }
        </div>
        <h2 className='title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 uppercase'>
          {note.title}
        </h2>
        {click && (
          <p className='leading-relaxed text-md mb-3'>{note.description}</p>
        )}
        {/* <p className='leading-relaxed'>
          {date.getTime() === 0
            ? ''
            : date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
        </p> */}
        <div className='leading-relaxed flex items-center justify-between'>
          <p>{date.toLocaleDateString()}</p>
          <p>{date.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
