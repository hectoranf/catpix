import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { rowHeight, pinMarginRows } from '@utils/Constants'

export default function Card({ order, cat, childRef }) {
	const widthRef = useRef(null)
	useEffect(() => {
		if (widthRef) {
			setWidth(widthRef.current.offsetWidth)
		}
	}, [widthRef])

	const [width, setWidth] = useState(null)
	useEffect(() => {
		if (width) {
			//Calculate number of rows
			const scaledHeight = Math.floor((width * cat.height) / cat.width)
			const numRows = Math.ceil(scaledHeight / rowHeight) + pinMarginRows
			setRows(numRows)
		}
	}, [width, cat.height, cat.width])

	const [rows, setRows] = useState(null)

	return (
		<Link ref={childRef} style={{ gridRowEnd: `span ${rows}` }} to={`/cat/${cat.id}`}>
			<article ref={widthRef} className='CatPin'>
				{/* <p>{order}</p> */}
				<img alt={cat.id} src={cat.url} className='blur' />
			</article>
		</Link>
	)
}
