import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import { Router, Route, browserHistory,hashHistory } from 'react-router'
import {Router,Route,Link} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import Index from './containers/Index'
const store = createStore(reducers,applyMiddleware(thunk));

// const history = syncHistoryWithStore(history, store);
ReactDOM.render((
		<Provider store={store}>
			<Router history={history}>
				<Route path="/index" component={Index}/>
			</Router>
		</Provider>
	),document.getElementById("app"))