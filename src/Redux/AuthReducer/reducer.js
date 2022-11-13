
import {getLocalData, saveLocalData,saveLocalFirstName,firstNameLocalData} from "../../utils/localStorage"
import * as types from "./actionType"
const init={
    signup:[],
    isAuth:getLocalData("login") ? true:false,
    login:getLocalData("login")||[],
    firstName:firstNameLocalData("firstName")||[],
    isLoading:false,
    isError:false
}

const reducer=(state=init,{type,payload})=>{
    switch(type){
        case types.GET_SIGNUP_REQUEST:{
            return{
                ...state,
                isLoading:true,
            }
        }

        case types.GET_SIGNUP_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                signup: payload
            }
        }

        case types.GET_SIGNUP_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true

            }
        }
        case types.GET_LOGIN_SUCCESS:{
            saveLocalData("login",payload)
            return{
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                login:payload

            }
        }
        case types.GET_FISTNAME_SUCCESS:{
            saveLocalFirstName("firstName",payload)
            return{
                ...state,
                firstName:payload

            }
        }
        case types.GET_LOGIN_FAILURE:{
            saveLocalData("login",payload)
            return{
                ...state,
                isAuth:false,
                login:""

            }
        }

        case types.GET_LOGOUT_SUCCESS:{
            localStorage.removeItem("login")
            localStorage.removeItem("firstName")
            return{
                ...state,
                isAuth:false,
                login:""

            }
        }
        default:{
            return state
        }
    }
}

export {reducer}