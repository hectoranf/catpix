import React, { useState, useEffect } from 'react'
import './CatDetails.css'

import CatList from '@components/CatList/CatList'

import { Details } from '@components/Cat'
import { getCatById, getRandomCats } from '@services/cats.service.js'

export default function CardDetails(props) {
	const [details, setDetails] = useState(null)
	useEffect(() => {
		getCatById(props.match.params.catId)
			.then((res) => {
				setDetails(res.data)
			})
			.catch((err) => console.log(err))
	}, [props.match.params.catId])

	const [catList, setCatList] = useState([])
	const [errMsg, setErrMsg] = useState('')
	const getCats = () => {
		getRandomCats()
			.then((res) => setCatList([...catList, ...res.data]))
			.catch((err) => setErrMsg('error loading cats'))
	}

	useEffect(() => {
		getCats()
		return function cleanup() {
			window.removeEventListener('scroll', handleBackButtonStyles)
			setCatList(null)
			setDetails(null)
		}
	}, [])

	const [backButtonStyles, setBackButtonStyles] = useState('BackButton')
	const handleBackButtonStyles = () => {
		if (details) {
			if (window.scrollY >= details.height) {
				setBackButtonStyles('BackButton scrolled')
			} else {
				setBackButtonStyles('BackButton')
			}
		}
	}
	window.addEventListener('scroll', handleBackButtonStyles)

	return (
		<>
			<section className='details'>
				<div className={backButtonStyles} onClick={() => props.history.push('/')}>
					<img
						src='https://res.cloudinary.com/hector/image/upload/v1634505098/catpix/left-arrow_q153xq.png'
						alt='arrow'
					/>
					<p>{'For you'}</p>
				</div>
				{details && <Details details={details}></Details>}
			</section>
			<h2>More cats</h2>
			{errMsg ? <p>{errMsg}</p> : <CatList cats={catList} getMoreCats={() => getCats()} />}
		</>
	)
}
