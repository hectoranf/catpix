import React from 'react'
import './Cat.css'

export default function Cat({ id, url }) {
	return (
		<article className='CatPin'>
			<img alt={id} src={url} />
		</article>
	)
}
