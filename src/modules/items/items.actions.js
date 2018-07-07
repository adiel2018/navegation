import Axios from 'axios';
import * as types from '../../constants/actionTypes';
import { BASE_URL } from '../../constants/config';


export function itemsListSuccess(res) {
	return {
		type: types.LIST_ITEMS,
		list: res.data
	};
}

export const itemsList = (page) => {
	return dispatch => {
		return Axios.get(`${BASE_URL}/future?page=${page}`)
		.then(res => {
			dispatch(itemsListSuccess(res));
		})
		.catch(error => {
			console.log('Items List', error); //eslint-disable-line
		});
	}
}