import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  CLEAR_AUTH_STATE,
} from '../actions/actionTypes';


const initislAuthState = {
   user: {},
   error: null,
   isLoggedin: false,
   inProgress:false
};
export default function auth(state = initislAuthState, action) {
  switch (action.type) {
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error:null,
      }
     case LOGIN_START:
     case SIGNUP_START:
       return {
         ...state,
         inProgress: true,
       };
     case LOGIN_SUCCESS:
     case SIGNUP_SUCCESS:
       return {
         ...state,
         inProgress: false,
         user: action.user,
         isLoggedin: true,
         error: null,
       };
     case LOGIN_FAIL:
     case SIGNUP_FAILED:
       return {
         ...state,
         inProgress: true,
         error: action.error,
       };
     case AUTHENTICATE_USER:
       return {
         ...state,
         user: action.user,
         isLoggedin: true,
       };
     case LOG_OUT:
       return {
         ...state,
         user: {},
         isLoggedin: false,
       };
     default:
       return state;
   }
   
}