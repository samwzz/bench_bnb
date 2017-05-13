import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actons/session_actions';
import { merge } from 'lodash';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser  = action.currentUser;
      return merge({}, nullUser, currentUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, errors);
    default:
      return state;
  }
};

export default SessionReducer;
