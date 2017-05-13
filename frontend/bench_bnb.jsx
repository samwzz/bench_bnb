import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signin, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    window.signin = signin;
    window.signup = signup;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});
