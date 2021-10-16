import './App.css'
import { Switch, Route } from 'react-router-dom'

import NavBar from '@components/layout/NavBar/NavBar'

import Home from '@views/Home/Home'
import CardDetails from '@views/CatDetails/CatDetails'

function App() {
	return (
		<>
			<NavBar />

			<main>
				<Switch>
					<Route exact path='/' render={(props) => <Home {...props} />} />
					<Route path='/cat/:catId' render={(props) => <CardDetails {...props} />} />
				</Switch>
			</main>
		</>
	)
}

export default App
