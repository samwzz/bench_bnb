import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';

export default combineReducers({
  session: SessionReducer,
  benches: benchesReducer
});
