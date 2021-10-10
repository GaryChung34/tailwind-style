import React from 'react';
import { BrowserRouter as Router, 
	Link, Route, Switch, Redirect } from 'react-router-dom'

import Page1 from './screen/page1.js'
import Page0 from './screen/page0.js'
import TestHome from './screen/testHome.js'
import LuckyDraw from './screen/luckyDraw.js'


function App() {
	return (
		<Router>
			<Switch>
				<Link exact path='/page1' component={Page1} />
				<Link exact path='/' component={Page0} />
				<Link exact path='/testHome' component={TestHome} />
				<Link exact path='/luckyDraw' component={LuckyDraw} />
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;
