import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/actionTypes';


const initislAuthState = {
   user: {},
   error: null,
   isLoggedin: false,
   inProgress:false
};
export default function auth(state = initislAuthState, action) {
   switch (action.type) {
     case LOGIN_START:
       return {
         ...state,
         inProgress: true,
       };
     case LOGIN_SUCCESS:
       return {
         ...state,
         inProgress: false,
         user: action.user,
         isLoggedin: true,
         error: null,
       };
     case LOGIN_FAIL:
       return {
         ...state,
          inProgress: true,
         error:action.error
       };
     default:
       return state;
   }
   
}