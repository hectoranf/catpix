import React, { useState, useEffect } from 'react'

import { getCatById } from '@services/cats.service.js'

import Details from '@components/Cat/Details'

export default function CardDetails(props) {
	const [details, setDetails] = useState(null)

	useEffect(() => {
		getCatById(props.match.params.catId)
			.then((res) => {
				setDetails(res.data)
			})
			.catch((err) => console.log(err))
	}, [])

	return <>{details && <Details details={details}></Details>}</>
}