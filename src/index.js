import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/index';


//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Router>
    {/*<Provider store={createStoreWithMiddleware(RootReducer)}>*/}
      <App />
    {/*</Provider>*/}
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
