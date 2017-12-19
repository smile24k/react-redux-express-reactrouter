import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux';
function index(state={},action) {
	switch(action.type){
		case "INDEX_TEST":
		return state;
		case "INDEX_SUCCESS":
		return action.result;
		default:
		return state;
	}
}
const reducers = combineReducers({
	index,
	routing
})
export default reducers;