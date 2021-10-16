import React, { useState, useEffect } from 'react'

import CatList from '@components/CatList/CatList'
import { getRandomCats } from '@services/cats.service.js'

export default function Home() {
	const [catList, setCatList] = useState([])
	const [errMsg, setErrMsg] = useState('')

	const getCats = () => {
		getRandomCats()
			.then((res) => setCatList([...catList, ...res.data]))
			.catch((err) => setErrMsg('error loading cats'))
	}

	useEffect(() => {
		getCats()
	}, [])

	useEffect(() => {
		return function cleanup() {
			setCatList(null)
		}
	}, [setCatList])

	return (
		<>{errMsg ? <p>{errMsg}</p> : <CatList cats={catList} getMoreCats={() => getCats()} />}</>
	)
}
