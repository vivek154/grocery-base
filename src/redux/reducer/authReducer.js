import { AUTH_TYPE } from '../action/authAction'


const initialState = {
    showOnBoardingScreen: false,
    myCart:[],
    totalPrice:0,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TYPE.ONBOARDING_DONE: {
            return {
                ...state,
                showOnBoardingScreen: true
            }
        }
        case AUTH_TYPE.RECEIVED_USER_DATA: {
            return {
                ...state,userData:action.payload
            }
        }
        case AUTH_TYPE.UPDATE_USER_DATA:{
            return{
                ...state,userData:action.payload
            }
        }
        case AUTH_TYPE.GET_MY_CART_DATA:{
            return {
                ...state,myCart:action.payload
            }
        }
        case AUTH_TYPE.DELETE_FROM_MY_CART:{
            return action.payload
        }
        case AUTH_TYPE.SET_TOTAL_PRICE:{
            return {
                ...state,totalPrice:action.payload
            }
        }
        default:
            return state;
    }
};

export default authReducer;