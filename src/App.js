import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './store/reducers';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  let composeEnhancers = null;
  if (process.env.NODE_ENV === "development") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    composeEnhancers = compose;
  }
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
