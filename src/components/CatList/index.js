import React, { useRef, useEffect, useState } from 'react'
import './CatList.css'
import Cat from '@components/Cat'

import Masonry from 'react-masonry-css'

export default function CatList({ cats, loadMoreCats }) {
	const breakpointColumnsObj = {
		default: 6,
		1510: 5,
		1260: 4,
		1010: 3,
		755: 2,
	}

	const loader = useRef(loadMoreCats)
	useEffect(() => {
		loader.current = loadMoreCats
	}, [loadMoreCats])

	const observerOptions = {
		threshold: 0.0,
	}
	const observer = useRef(
		new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				loader.current()
			}
		}, observerOptions)
	)

	const [lastCat, setLastCat] = useState(null)
	useEffect(() => {
		const currentCat = lastCat
		const currentObserver = observer.current

		//as first time the lastcat ref is null
		if (currentCat) {
			currentObserver.observe(currentCat)
		}

		//cleanup
		return () => {
			if (currentCat) {
				currentObserver.unobserve(currentCat)
			}
		}
	}, [lastCat])

	return (
		<section className='CatList'>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'>
				{cats.map(({ id, url }, idx) => {
					return idx < cats.length - 1 ? (
						<Cat key={idx} id={id} url={url} />
					) : (
						<Cat childRef={setLastCat} key={idx} id={id} url={url} />
					)
				})}
			</Masonry>
		</section>
	)
}
