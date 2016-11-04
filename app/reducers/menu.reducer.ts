import {IAction} from '../actions/action.interface';
import {MenuActions} from '../actions/menu.actions';

export interface IMenuState {
    brandName:string;
    isLoading:boolean;
    isLoaded:boolean;
    leftItems:Array<any>;
    rightItems:Array<any>;
}

const initialState:IMenuState = {
    brandName:'',
    isLoading:false,
    isLoaded:false,
    leftItems:[],
    rightItems:[]
};

export default (state:IMenuState = initialState, action:IAction) => {
    switch(action.type) {
        case MenuActions.actions.LOAD_MENU:
            return Object.assign({}, state, {isLoading:true});
        case MenuActions.actions.STORE_MENU:
            return Object.assign({}, state, {
                brandName:action.payload.brandName,
                isLoading:false,
                isLoaded:true,
                leftItems:action.payload.leftItems,
                rightItems:action.payload.rightItems
            });
        default:
            return state;
    }
};
