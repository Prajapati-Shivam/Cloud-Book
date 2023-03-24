import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "641b359f59a280e8994ca1b2",
      "user": "6419ecb58f9f73f487297bcc",
      "title": "my title",
      "description": "my description",
      "tag": "personal",
      "date": "2023-03-22T17:06:39.593Z",
      "__v": 0
    },
    {
      "_id": "641b359f59a280e8994ca1b2",
      "user": "6419ecb58f9f73f487297bcc",
      "title": "my title",
      "description": "my description",
      "tag": "personal",
      "date": "2023-03-22T17:06:39.593Z",
      "__v": 0
    },
    {
      "_id": "641b359f59a280e8994ca1b2",
      "user": "6419ecb58f9f73f487297bcc",
      "title": "my title",
      "description": "my description",
      "tag": "personal",
      "date": "2023-03-22T17:06:39.593Z",
      "__v": 0
    },
    {
      "_id": "641b359f59a280e8994ca1b2",
      "user": "6419ecb58f9f73f487297bcc",
      "title": "my title",
      "description": "my s, adipisci a eum eius dicta officiis voluptatem nulla officia sint distinctio et atque totam cumque? Harum a consequatur, od! Ratione vero sint magnam, aliquam blanditiis facere quibusdam quia rerum quo doloremque necessitatibus.s, adipisci a eum eius dicta officiis voluptatem nulla officia sint distinctio et atque ! Ratione vero sint magnam, aliquam blanditiis facere quibusdam quia rerum quo doloremque necessitatibus.",
      "tag": "personal",
      "date": "2023-03-22T17:06:39.593Z",
      "__v": 0
    },
    {
      "_id": "641b359f59a280e8994ca1b2",
      "user": "6419ecb58f9f73f487297bcc",
      "title": "my title",
      "description": "my s, adipisci a eum eius dicta officiis voluptatem nulla officia sint distinctio et atque totam cumque? Harum a consequaodit rerum in consequuntur sequi natus unde molestiae hic modi nisi eum officia laborum placeat soluta illum neque delectus saepe! Ratione vero sint magnam, aliquam blanditiis facere quibusdam quia rerum quo doloremque necessitatibus.",
      "tag": "personal",
      "date": "2023-03-22T17:06:39.593Z",
      "__v": 0
    },
    {
      "_id": "641b359f59a280e8994ca1b2",
      "user": "6419ecb58f9f73f487297bcc",
      "title": "my title",
      "description": "my Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis commodi enim deleniti incidunt at reiciendis minu Ratione ipsum delectus qui! Voluptatibus, dolorem nemo nesciunt voluptate facere placeat rem quia, suscipit dolorum um, delectus officia numquam. Ad, fugiat, eos optio ab, minima dolore maiores assumenda maxime voluptate accusamus fuga.",
      "tag": "personal",
      "date": "2023-03-22T17:06:39.593Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(notesInitial);

  // Add note
  const addNote = (title, description, tag) => {
    console.log("adding note")
    const note = {
      "_id": "641b359f59a280e8994ca1b2",
      "user": "6419ecb58f9f73f487297bcc",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-03-22T17:06:39.593Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }
  // Edit note
  const editNote = (id, title, description, tag) => {

  }
  // Delete note
  const deleteNote = (id) => {

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;