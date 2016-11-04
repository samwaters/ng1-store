import {combineReducers} from 'redux';
import helloReducer from './hello.reducer';

export interface IRootReducer {
  hello:any;
}

export default combineReducers({
  hello:helloReducer
});
