import './App.css'
import { Switch, Route } from 'react-router-dom'

import Home from '@views/Home'

function App() {
	return (
		<main>
			<Switch>
				<Route exact path='/' render={(props) => <Home />} />
			</Switch>
		</main>
	)
}

export default App
