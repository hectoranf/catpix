import axios from 'axios'

const handler = axios.create({
	baseURL: `https://api.thecatapi.com/v1`,
})

export const getRandomCats = () => {
	return handler.get('/images/search?limit=100')
}

export const getCatById = (catId) => {
	return handler.get(`/images/${catId}`)
}
