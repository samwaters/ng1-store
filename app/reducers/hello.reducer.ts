import {IAction} from '../actions/action.interface';
import {HelloActions} from '../actions/hello.actions';

export interface IHelloState {
  greeting:string;
}

const initialState:IHelloState = {greeting:''};

export default (state:any = initialState, action:IAction) => {
  switch(action.type) {
    case HelloActions.actions.UPDATE_GREETING:
      return Object.assign({}, state, {greeting:action.payload});
    default:
      return state;
  }
};
