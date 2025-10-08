import { useState } from 'react'
import { fetchMovies } from '../services/api'
import MovieCard from '../components/MovieCard'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    const results = await fetchMovies(query)
    setMovies(results)
  }

  return (
    <div className="container">
      <header>
        <h1>🎬 Buscador de Películas</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Escribe una película..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <section className="movie-grid">
        <AnimatePresence>
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  )
}

