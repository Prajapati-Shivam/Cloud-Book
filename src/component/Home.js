import { useContext } from "react"
import noteContext from "../context/notes/noteContext"
import Notes from "./Notes"

const Home = () => {
  const context = useContext(noteContext)
  const { name } = context;
  const getGreeting = () => {
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime >= 5 && currentTime < 12) {
      greeting = 'Good Morning';
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }

    return greeting;
  };

  return (
    <section className="body-font relative">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{getGreeting()}, {name}</h1>
      <Notes />
    </section>

  )
}

export default Home