import React from 'react'
import './Cat.css'

export default function Cat({ id, url, childRef }) {
	return (
		<article ref={childRef} className='CatPin'>
			<img alt={id} src={url} className='blur' />
		</article>
	)
}
