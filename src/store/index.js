import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk'
import initialState from '../reducers/initialState';

let middleware = [ReduxThunk]; 

export default function configureStore() {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);
}