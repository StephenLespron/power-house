import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Process from './components/Process/Process';
import Examples from './components/Examples/Examples';

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
		<Route path='/process' component={Process} />
		<Route path='/examples' component={Examples} />
	</Switch>
);
