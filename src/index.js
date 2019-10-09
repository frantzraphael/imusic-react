import { render } from 'react-dom';
import React from 'react';
import './styles/index.css';
import App from './components/App';


const renderApp = Comp => render(
  <App />,
  document.querySelector('#root')
);

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', _ => renderApp(App));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
