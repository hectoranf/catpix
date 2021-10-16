import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<nav>
			<Link to='/' className='logo'>
				<h1>Catpix</h1>
			</Link>
		</nav>
	)
}
