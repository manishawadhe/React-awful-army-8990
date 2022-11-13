import * as types from "./actionTypes";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
export const getCities = (params) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
  try {
    let res = await axios.get(`https://api-0231.herokuapp.com/results?q=india`, {
      params: params,
    });
    return dispatch({
      type: types.GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({ type: types.GET_ALL_PRODUCTS_FAILURE });
  }
};

// ===============ADD PROPERTY FORM ACTIONS=========================\
export const tempFormFn = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: types.ADD_FORM_SUCCESS, payload });
};
export const addForm = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_FORM_REQUEST });

  try {
    let res = await axios.post("https://api-0231.herokuapp.com/form", payload);
    return dispatch({ type: types.ADD_FORM_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.ADD_FORM_FAILURE });
  }
};
export const deleteForm = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_FORM_REQUEST });
  try {
    let res = await axios.delete(`https://api-0231.herokuapp.com/form/${id}`);
    return dispatch({ type: types.DELETE_FORM_SUCCESS, payload: res.data });
  } catch (err) {
    return dispatch({ type: types.DELETE_FORM_FAILURE });
  }
};


export const getSingleproduct = (id) => async (dispatch) => {
  dispatch({ type: types.SINGLE_PRODUCT_REQUEST });
  try {
    let res = await axios.get(`https://api-0231.herokuapp.com/results/${id}`);
    return dispatch({
      type: types.SINGLE_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({ type: types.SINGLE_PRODUCT_FAILURE });
  }
};


