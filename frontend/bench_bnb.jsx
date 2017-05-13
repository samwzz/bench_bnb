import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.store = configureStore();
    window.signin = APIUtil.signin;
    window.signup = APIUtil.signup;
    window.signout = APIUtil.signout;

    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
