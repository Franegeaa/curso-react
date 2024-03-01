import { useState } from "react"
import "./App.css"
import { ListOfMovies } from "./Components/ListOfMovies.jsx"
import responseMovies from "./mocks/movies-found.json"

function App() {
  const movies = responseMovies.Search
  const [query, setQuery] = useState('')

  const handleSumbit = (event) => {
    event.preventDefault()
    const search = Object.fromEntries(new window.FormData(event.target))
    setQuery(search)
  }

  return (
  <>
    <header>
      <form onSubmit={handleSumbit} className="form">
          <input name="query" placeholder="End Game"></input>
          <button type="sumbit">Buscar</button>
      </form>
    </header> 
    <main>
      <h2>Peliculas Encontradas:</h2>
      <section>
        <ListOfMovies movies={movies} query={query}/>
      </section>
    </main>   
  </>
  )
}

export default App
