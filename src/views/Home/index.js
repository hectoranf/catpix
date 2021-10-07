import React, { useState, useEffect } from 'react'

import CatList from '@components/CatList'
import { getRandomCats } from '@services/cats.service.js'

export default function Home() {
	const [catList, setCatList] = useState([])
	const [errMsg, setErrMsg] = useState('')

	useEffect(function () {
		console.log('render!')
		getRandomCats()
			.then((res) => setCatList(res.data))
			.catch((err) => setErrMsg('error loading cats'))
	}, [])

	return <>{errMsg ? <p>{errMsg}</p> : <CatList cats={catList} />}</>
}
