import "./App.css"
import { useEffect, useState, useRef } from 'react'
import{ Movies } from "./Components/Movies.jsx"
import { useMovies } from "./hooks/useMovies.js"

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  
  useEffect (() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    } 

    if (search === '') {
      setError('No se puede buscar una pelicula con ese nombre')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if(search.length < 3) {
      setError('La buqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return {error, search, setSearch}

}

function App() {
  const {search, error, setSearch} = useSearch()
  const { movies, loading, getMovies } = useMovies({search})


  const handleSubmit = (event) => {
    event.preventDefault()    
    getMovies()
  }
 
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return(
    <>
      <div className="page">
        <header>
          <h1>Buscador de peliculas</h1>
          <form className="form" onSubmit={handleSubmit}>
              <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} placeholder="Avengers, Star Wars ..."/>
              <button type="sumbit">Buscar</button>
          </form>
          {error && <p style={{color: "red"}}>{error}</p>}
        </header>

        <main>
          {
            loading ? <p>Cargando...</p> : <Movies movies={movies}/> 
          }
        </main>
      </div>
    </>
  )
}

export default App
