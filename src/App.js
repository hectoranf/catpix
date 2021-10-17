import './App.css'
import React, { useState } from 'react'

import { Switch, Route } from 'react-router-dom'
import ScrollToTop from '@utils/hooks/ScrollToTop'

import NavBar from '@components/layout/NavBar/NavBar'

import Home from '@views/Home/Home'
import CardDetails from '@views/CatDetails/CatDetails'

function App() {
	const [filter, setFilter] = useState(null)

	return (
		<>
			<NavBar setFilter={setFilter} />
			<main>
				<ScrollToTop>
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => <Home {...props} filter={filter} />}
						/>
						<Route path='/cat/:catId' render={(props) => <CardDetails {...props} />} />
					</Switch>
				</ScrollToTop>
			</main>
		</>
	)
}

export default App
