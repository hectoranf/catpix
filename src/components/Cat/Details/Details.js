import React from 'react'

import './Details.css'

export default function Details({ details }) {
	const { id, url, breeds } = details
	return (
		<section className='CatDetails'>
			<figure className='CatImage'>
				<a target='_blank' rel='noreferrer' href={url}>
					<img alt={id} src={url} />
				</a>
			</figure>
			<div className='CatInfo'>
				<div className='header'>
					<div className='headerButton'>
						<span>
							<img
								alt='options'
								src='https://res.cloudinary.com/hector/image/upload/v1634479336/catpix/dots_ceghue.png'
							/>
						</span>
						<span>
							<img
								alt='uploading'
								src='https://res.cloudinary.com/hector/image/upload/v1634479336/catpix/upload_fol2ou.png'
							/>
						</span>
					</div>
					<span>Save</span>
				</div>
				{!breeds ? (
					<h2>{`There's not information about this kitty`}</h2>
				) : (
					<>
						<a target='_blank' rel='noreferrer' href={breeds[0].wikipedia_url}>
							<h2>{breeds[0].name}</h2>
						</a>
						<p>{breeds[0].origin}</p>
						<p>{breeds[0].temperament}</p>
						<p>{breeds[0].description}</p>
					</>
				)}
			</div>
		</section>
	)
}
