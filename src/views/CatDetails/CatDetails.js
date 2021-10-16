import React, { useState, useEffect } from 'react'

import { getCatById } from '@services/cats.service.js'

import { Details } from '@components/Cat'

export default function CardDetails(props) {
	const [details, setDetails] = useState(null)

	useEffect(() => {
		getCatById(props.match.params.catId)
			.then((res) => {
				setDetails(res.data)
			})
			.catch((err) => console.log(err))
	}, [props.match.params.catId])

	return (
		<>
			<span className='BackButton' onClick={() => props.history.push('/')}>
				{'<- Back'}
			</span>
			{details && <Details details={details}></Details>}
		</>
	)
}
