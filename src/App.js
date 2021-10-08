import React from 'react';
import { BrowserRouter as Router, 
	Link, Route, Switch, Redirect } from 'react-router-dom'

import Page1 from './screen/page1.js'
import Page0 from './screen/page0.js'


function App() {
	return (
		<Router>
			<Switch>
				<Link exact path='/page1' component={Page1} />
				<Link exact path='/' component={Page0} />
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;
