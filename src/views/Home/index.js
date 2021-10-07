import React, { useState, useEffect } from 'react'

import CatList from '@components/CatList'
import { getRandomCats } from '@services/cats.service.js'

export default function Home() {
	const [catList, setCatList] = useState([])
	const [errMsg, setErrMsg] = useState('')

	const loadMoreCats = () => {
		getRandomCats()
			.then((res) => setCatList([...catList, ...res.data]))
			.catch((err) => setErrMsg('error loading cats'))
	}

	useEffect(() => {
		getRandomCats()
			.then((res) => setCatList(res.data))
			.catch((err) => setErrMsg('error loading cats'))
	}, [])

	useEffect(() => {
		//cleanup
		return () => {
			setCatList(null)
		}
	}, [setCatList])

	return (
		<>
			{errMsg ? (
				<p>{errMsg}</p>
			) : (
				<CatList cats={catList} loadMoreCats={() => loadMoreCats()} />
			)}
		</>
	)
}
