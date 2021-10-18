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
				<img
					src='https://res.cloudinary.com/hector/image/upload/v1634516500/catpix/favicon_tqtdbg.ico'
					alt='logo'
				/>
			</Link>
			<form className='filter'>
				<select value={breed} onChange={handleBreed}>
					<option value={''}>Filter by breed</option>
					{breedList.map((elm) => (
						<option key={elm.id} value={elm.id}>
							{elm.name}
						</option>
					))}
				</select>
			</form>
			<span className='profile'>
				<img
					src='https://res.cloudinary.com/hector/image/upload/v1634517824/catpix/profilePic_tj1tnx.jpg'
					alt='profile pic'
				/>
			</span>
		</nav>
	)
}
