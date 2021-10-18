import axios from 'axios'

const handler = axios.create({
	baseURL: `https://api.thecatapi.com/v1`,
})

export const getRandomCats = () => {
	return handler.get('/images/search?limit=20')
}

export const getCatById = (catId) => {
	return handler.get(`/images/${catId}`)
}

export const getAllBreeds = () => {
	return handler
		.get(`/breeds`)
		.then((res) => {
			return res.data.map((elm) => {
				return { name: elm.name, id: elm.id }
			})
		})
		.catch((err) => console.log(err))
}

export const getCatsByBreed = (breedId) => {
	return handler.get(`/images/search?breed_ids=${breedId}&limit=20`)
}
