import * as types from '../constants/users';
import callApi from '../utils/call-api';

export function editUser({username, firstName, lastName, city}) {
    return (dispatch, getState) =>{
        const state = getState();
        const {isFetching} = state.services;
        const {token} =state.auth;

        if (isFetching.editUser) {
            return Promise.resolve();
        }
                
        dispatch ({
            type:types.USER_REQUEST,
        })
        return callApi('/users/me', token, {method : 'POST'}, {data:{username, firstName, lastName, city}}) 
        
        .then(json => dispatch({
            type: types.USER_SUCCESS,
            payload: json,
        }))
        .catch(reason => dispatch({
            type: types.USER_FAILURE,
            payload: reason,
        }));
    };
}