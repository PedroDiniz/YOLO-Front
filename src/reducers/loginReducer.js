import {
  USER_AUTH,
  USER_AUTH_SUCCESS,
  USER_AUTH_ERROR,
  FORGOT_PASSWORD
} from "../actions/types";

const loginInitialState = {
  user: {},
  message: "",
  loading: null,
  emailSent: false,
  error: "",
  login: null,
  email: ""
};

const loginReducer = (state = loginInitialState, action) => {
  const newState = {};

  switch (action.type) {
    case USER_AUTH: {
      Object.assign(newState, state, {
        loading: action.payload,
        login: false
      });

      return newState;
    }

    case USER_AUTH_SUCCESS: {
      Object.assign(newState, state, {
        user: action.payload,
        loading: null
      });

      return newState;
    }
    case USER_AUTH_ERROR: {
      Object.assign(newState, state, {
        error: action.payload,
        loading: null,
        login: true
      });

      return newState;
    }
    case FORGOT_PASSWORD: {
      Object.assign(newState, state, {
        email: action.payload
      });

      return newState;
    }
    // case RECOVERY_PASSWORD: {
    //   Object.assign(newState, state, {
    //     email: action.payload
    //   });

    //   return newState;
    // }
    // case RECOVERY_PASSWORD_ERROR: {
    //   Object.assign(newState, state, {
    //     error: action.payload,
    //     email: ""
    //   });

    //   return newState;
    // }
    default:
      return state;
  }
};

export default loginReducer;
