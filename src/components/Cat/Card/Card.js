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
	const scaledHeight = useRef(0)
	useEffect(() => {
		if (width) {
			//Calculate number of rows
			scaledHeight.current = Math.floor((width * cat.height) / cat.width)
			const numRows = Math.floor(scaledHeight.current / rowHeight) + pinMarginRows
			setRows(numRows)
		}
	}, [width, cat.height, cat.width])

	const [rows, setRows] = useState(null)

	return (
		<Link
			ref={childRef}
			style={{ gridRowEnd: `span ${rows}` }}
			to={`/cat/${cat.id}`}
			className='link'>
			<article
				ref={widthRef}
				style={{ height: `${scaledHeight.current}px` }}
				className='CatPin'>
				<div className='pinOverlay'>
					<span className='saveButton'>Save</span>
					<span className='footerButton options'>
						<img
							alt='options'
							src='https://res.cloudinary.com/hector/image/upload/v1634479336/catpix/dots_ceghue.png'
						/>
					</span>
					<span className='footerButton upload'>
						<img
							alt='uploading'
							src='https://res.cloudinary.com/hector/image/upload/v1634479336/catpix/upload_fol2ou.png'
						/>
					</span>
				</div>
				{/* <p>{order}</p> */}
				<img alt={cat.id} src={cat.url} className='blur catImage' />
			</article>
		</Link>
	)
}
