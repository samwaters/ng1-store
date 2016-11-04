import {combineReducers} from 'redux';
import helloReducer from './hello.reducer';
import menuReducer from './menu.reducer';

export interface IRootReducer {
  hello:any;
  menu:any;
}

export default combineReducers({
  hello:helloReducer,
  menu:menuReducer
});
