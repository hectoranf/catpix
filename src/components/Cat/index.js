import React from 'react'
import './Cat.css'

import { Link } from 'react-router-dom'

export default function Cat({ id, url, childRef }) {
	return (
		<Link to={`/cat/${id}`}>
			<article ref={childRef} className='CatPin'>
				<img alt={id} src={url} className='blur' />
			</article>
		</Link>
	)
}
