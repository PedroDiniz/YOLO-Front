import api from "../config/api";
import { toast } from "react-toastify";

import {
  USER_AUTH,
  USER_AUTH_SUCCESS,
  USER_AUTH_ERROR,
  FORGOT_PASSWORD
} from "./types";

export function signin({ email, password }, callback) {
  return function(dispatch) {
    dispatch({
      type: USER_AUTH,
      payload: true
    });

    api
      .post(`/auth/signin`, { email, password })
      .then(response => {
        dispatch({
          type: USER_AUTH_SUCCESS,
          payload: response.data.user
        });
        localStorage.setItem("@BeLight:token", response.data.token);
        localStorage.setItem("@BeLight:userId", response.data.user._id);
        //console.log(response.data);
        callback();
      })
      .catch(err => {
        dispatch({
          type: USER_AUTH_ERROR,
          payload: err
        });
        toast.error("Usuário e senha não conferem", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true
        });
      });
  };
}

export function forgotPassword({ email }, callback) {
  return dispatch => {
    api
      .post(`/auth/forgot_password`, { email })
      .then(async response => {
        console.log(response.data);
        dispatch({
          type: FORGOT_PASSWORD,
          payload: email
        });
        callback();
      })
      .catch(err => {
        console.log(err);
        toast.error("Email não cadastrado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true
        });
      });
  };
}

export function recoveryPassword({ email, token, password }, callback) {
  return function(dispatch) {
    api
      .post(`/auth/reset_password`, { email, token, password })
      .then(response => {
        console.log(response);
        callback();
      })
      .catch(err => {
        console.log(err);
        toast.error("Falha ao resetar senha", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true
        });
      });
  };
}
