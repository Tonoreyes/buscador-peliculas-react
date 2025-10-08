const API_KEY = "8fc9649a25805ff1eca71fbc25423bc4"
const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

export async function fetchMovies(query) {
  const res = await fetch(`${BASE_URL}?api_key=${API_KEY}&query=${query}`)
  const data = await res.json()
  return data.results
}

