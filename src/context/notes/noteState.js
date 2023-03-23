
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "shivam",
    class: "12th"
  }
  return (
    <NoteContext.Provider value={state}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;