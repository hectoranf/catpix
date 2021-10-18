import React, { useState, useEffect, useRef } from 'react'

import CatList from '@components/CatList/CatList'
import { getRandomCats, getCatsByBreed } from '@services/cats.service.js'

export default function Home({ filter }) {
	const [catList, setCatList] = useState([])
	const [errMsg, setErrMsg] = useState('')

	const getCats = () => {
		if (!filter) {
			getRandomCats()
				.then((res) => setCatList([...catList, ...res.data]))
				.catch((err) => setErrMsg('error loading cats'))
		} else {
			getCatsByBreed(filter)
				.then((res) => setCatList([...catList, ...res.data]))
				.catch((err) => setErrMsg('error loading cats'))
		}
	}

	const resetCats = () => {
		if (!filter) {
			getRandomCats()
				.then((res) => setCatList(res.data))
				.catch((err) => setErrMsg('error loading cats'))
		} else {
			getCatsByBreed(filter)
				.then((res) => setCatList(res.data))
				.catch((err) => setErrMsg('error loading cats'))
		}
	}

	useEffect(() => {
		getCats()
	}, [])

	useEffect(() => {
		setCatList([])
		resetCats()
	}, [filter])

	useEffect(() => {
		console.log(catList.length)
	}, [catList])

	// useEffect(() => {
	// 	return function cleanup() {
	// 		setCatList([])
	// 	}
	// }, [setCatList])

	return (
		<>{errMsg ? <p>{errMsg}</p> : <CatList cats={catList} getMoreCats={() => getCats()} />}</>
	)
}
