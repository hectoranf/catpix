import React from 'react'
import './CatList.css'
import Cat from '@components/Cat'

import Masonry from 'react-masonry-css'

export default function CatList({ cats }) {
	const breakpointColumnsObj = {
		default: 6,
		1512: 5,
		1260: 4,
		1008: 3,
		755: 2,
	}
	return (
		<section className='CatList'>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'>
				{cats.map(({ id, url }) => (
					<Cat key={id} id={id} url={url} />
				))}
			</Masonry>
		</section>
	)
}
