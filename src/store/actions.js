import Axios from "axios";

export const GET_PROFILES_START = "GET_PROFILES_START";
export const GET_PROFILES_SUCCESS = "GET_PROFILES_SUCCESS";
export const GET_PROFILES_FAIL = "GET_PROFILES_FAIL";

export const GET_USER_PROFILE_START = "GET_USER_PROFILE_START";
export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAIL = "GET_USER_PROFILE_FAIL";

export const CLEAR_PROFILES = "CLEAR_PROFILES";

export const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

const CLIENT_ID = "79e6147af47818428c93";
const CLIENT_SECRET = "e82cdad60797d40f5aee97b6ecb72fc27c6fccc4";

export const getProfiles = (searchName) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PROFILES_START });
      const response = await Axios.get(
        `https://api.github.com/search/users?q=${searchName}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
      );
      dispatch({ type: GET_PROFILES_SUCCESS, payload: response.data.items });
    } catch (error) {
      dispatch({ type: GET_PROFILES_FAIL, payload: error });
    }
  };
};

export const getUserProfile = (loginName) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USER_PROFILE_START });
      const response = await Axios.get(
        `https://api.github.com/users/${loginName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
      );
      console.log(response.data);
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_USER_PROFILE_FAIL, payload: error });
    }
  };
};
