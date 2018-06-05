import * as types from '../constants/users';
import callApi from '../utils/call-api';

export function editUser({username, firstName, lastName, city}) {
    return (dispatch, getState) =>{
        const {token} = getState().auth;
        
        dispatch ({
            type:types.USER_REQUEST,
        })
        return callApi('/users/me', token, {method : 'POST'}, {data:{username, firstName, lastName, city}}) 
        
        .then(json => dispatch({
            type: types.USER_SUCCESS,
            data: json,
        }))
        .catch(reason => dispatch({
            type: types.USER_FAILURE,
            data: reason,
        }));
    };
}