import {
  GET_PROFILES_START,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAIL,
  CLEAR_PROFILES,
  CHANGE_CURRENT_PAGE,
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  SET_SEARCH_TEXT,
} from "./actions";
import stateUpdate from "../utils/stateUpdate";

const initialState = {
  loading: false,
  error: null,
  profiles: [],
  currentPage: 1,
  profile: {},
  profileError: null,
  searchText: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES_START:
      return stateUpdate(state, { loading: true });
    case GET_PROFILES_SUCCESS:
      return stateUpdate(state, {
        loading: false,
        error: null,
        profiles: action.payload,
      });
    case GET_PROFILES_FAIL:
      return stateUpdate(state, {
        loading: false,
        error: action.payload,
        profiles: [],
      });
    case CHANGE_CURRENT_PAGE:
      return stateUpdate(state, { currentPage: action.payload });
    case GET_USER_PROFILE_START:
      return stateUpdate(state, { loading: true });
    case GET_USER_PROFILE_SUCCESS:
      return stateUpdate(state, {
        loading: false,
        profile: action.payload,
        profileError: null,
      });
    case GET_USER_PROFILE_FAIL:
      return stateUpdate(state, {
        loading: false,
        profileError: action.payload,
      });
    case SET_SEARCH_TEXT:
      return stateUpdate(state, {
        searchText: action.payload,
      });
    case CLEAR_PROFILES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
