import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GridProvider } from './GridProvider';
import { Home, Login } from 'pages';
import { Navbar } from '../../layout/Navbar/Navbar';
import { Main } from './Router.style';
import { useQueryParams } from 'hooks';

function Routes() {
	useQueryParams();

	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/login" component={Login} />
		</Switch>
	);
}

export default function Router() {
	return (
		<Main>
			<BrowserRouter>
				<GridProvider>
					<Navbar />
					<Routes />
				</GridProvider>
			</BrowserRouter>
		</Main>
	);
}
