import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
	const [navBarShadow, setnavBarShaow] = useState('')
	const showShadow = () => {
		if (window.scrollY >= 5) {
			setnavBarShaow('shadow')
		} else {
			setnavBarShaow('')
		}
	}
	window.addEventListener('scroll', showShadow)
	return (
		<nav className={navBarShadow}>
			<Link to='/' className='logo'>
				<h1>Catpix</h1>
			</Link>
		</nav>
	)
}
