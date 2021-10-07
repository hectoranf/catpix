import './App.css'
import { Switch, Route } from 'react-router-dom'

import NavBar from '@components/NavBar'

import Home from '@views/Home'

function App() {
	return (
		<>
			<NavBar />
			<main>
				<Switch>
					<Route exact path='/' render={(props) => <Home />} />
				</Switch>
			</main>
		</>
	)
}

export default App
