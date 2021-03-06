export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signin = user => dispatch => (
  APIUtil.signin(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON))))
);

export const signout = () => dispatch => (
  APIUtil.signout().then(() => (dispatch(receiveCurrentUser(null))))
);

export const signup = user => dispatch =>  (
  APIUtil.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))))
);
