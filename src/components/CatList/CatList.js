import React, { useState, useEffect } from 'react'
import './CatList.css'
import { Card } from '../Cat'
import { rowHeight } from '@utils/Constants'

export default function CatList({ cats, getMoreCats }) {
	//
	//
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				// getMoreCats()
			}
		},
		{ threshold: 0.0 }
	)

	const [lastCat, setLastCat] = useState(null)
	useEffect(() => {
		// const currentCat = lastCat
		// const currentObserver = observer.current

		if (lastCat) {
			observer.observe(lastCat)
		}

		// //cleanup
		// return () => {
		// 	if (observer.current) {
		// 		observer.current.unobserve(lastCat)
		// 	}
		// }
	}, [lastCat])

	return (
		<section style={{ gridAutoRows: `minmax(${rowHeight}px, auto)` }} className='CatList'>
			{cats.map((elm, idx) => {
				return idx < cats.length - 1 ? (
					<Card key={idx} order={idx} cat={elm} />
				) : (
					<Card key={idx} order={idx} cat={elm} childRef={setLastCat} />
				)
			})}
		</section>
	)
}
