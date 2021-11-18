import App from './components/App';
import { GlobalStyle } from './styles/styles';
import Home from './components/Home';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
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
						path={'/'}
					/>
				</Switch>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
