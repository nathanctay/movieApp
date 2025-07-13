export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    ACCESS_TOKEN: process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN,
    HEADERS: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.HEADERS
    })

    if (!response.ok) {
        throw new Error('Failed to fetch movies: ', response.statusText)
    }

    const data = await response.json()
    return data.results
}

export const fetchMovieDetails = async (id: string): Promise<MovieDetails> => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${id}`, {
            method: 'GET',
            headers: TMDB_CONFIG.HEADERS
        })
        if (!response.ok) throw new Error("Failed to fetch movie details")

        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}