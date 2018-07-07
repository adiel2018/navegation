import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.items, action) {
	switch (action.type) {
		case types.LIST_ITEMS:
			return {
				...state,
				list: action.list
			};
		default:
			return state;
	}
}