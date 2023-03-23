import React from 'react'

const NoteItem = (props) => {
  const { title, description, tag } = props.note;
  return (
    <div className="lg:w-1/3">
      <div className=" bg-gray-100 m-4 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
          {tag}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 uppercase">
          {title}
        </h1>
        <p className="leading-relaxed mb-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default NoteItem