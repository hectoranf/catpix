import React, { useState, useEffect, useRef } from 'react'
import './CatList.css'
import { Card } from '../Cat'
import { rowHeight } from '@utils/Constants'

export default function CatList({ cats, getMoreCats }) {
	//
	//
	const catLoader = useRef(getMoreCats)
	useEffect(() => {
		catLoader.current = getMoreCats
	}, [getMoreCats])

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				catLoader.current()
			}
		},
		{ threshold: 0.0 }
	)

	const [lastCat, setLastCat] = useState(null)
	useEffect(() => {
		if (lastCat) {
			observer.observe(lastCat)
		}

		return function cleanup() {
			if (lastCat) {
				observer.unobserve(lastCat)
			}
		}
	}, [lastCat])

	return (
		<section style={{ gridAutoRows: `minmax(${rowHeight}px, auto)` }} className='CatList'>
			{cats &&
				cats.map((elm, idx) => {
					return idx < cats.length - 1 ? (
						<Card key={idx} order={idx} cat={elm} />
					) : (
						<Card key={idx} order={idx} cat={elm} childRef={setLastCat} />
					)
				})}
		</section>
	)
}
