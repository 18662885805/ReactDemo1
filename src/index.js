import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./store/reducer";
import state from "./store/state";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
const store = createStore(reducer,state);

ReactDOM.render(	
	<Provider store={store}>	
    	<App />
    </Provider>
  	,
	document.getElementById('root'));
registerServiceWorker();
