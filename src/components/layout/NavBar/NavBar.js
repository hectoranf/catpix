import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { Link, useHistory } from 'react-router-dom'
import { getAllBreeds } from '@services/cats.service.js'

export default function NavBar({ setFilter }) {
	const [breedList, setBreedList] = useState([])
	useEffect(() => {
		getAllBreeds()
			.then((res) => setBreedList(res))
			.catch((err) => console.log(err))
	}, [])

	const [breed, setBreed] = useState('')
	const handleBreed = (e) => {
		setBreed(e.target.value)
	}
	const history = useHistory()
	useEffect(() => {
		setFilter(breed)
		history.push('/')
		// setBreed('')
	}, [breed])

	const [navBarShadow, setnavBarShaow] = useState('')
	const handleShadow = () => {
		if (window.scrollY >= 5) {
			setnavBarShaow('shadow')
		} else {
			setnavBarShaow('')
		}
	}
	window.addEventListener('scroll', handleShadow)
	return (
		<nav className={navBarShadow}>
			<Link to='/' className='logo'>
				<h1>Catpix</h1>
			</Link>
			<form>
				<select value={breed} onChange={handleBreed}>
					<option value={''}>Filter by breed</option>
					{breedList.map((elm) => (
						<option key={elm.id} value={elm.id}>
							{elm.name}
						</option>
					))}
				</select>
			</form>
		</nav>
	)
}
