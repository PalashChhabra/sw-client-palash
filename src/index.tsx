import { APPROUTES } from './app-routes/routes';
import App from './components/App';
import { GlobalStyle } from './styles/styles';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ResourceDetails from './pages/ResourceDetails';
import createStore from './store';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = (
	<Provider store={createStore()}>
		<Router>
			<GlobalStyle />
			<App>
				<Switch>
					<Route component={Home}
						exact
						path={APPROUTES.Home}
					/>
					<Route component={ResourceDetails}
						exact
						path={APPROUTES.Resource}
					/>
				</Switch>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
