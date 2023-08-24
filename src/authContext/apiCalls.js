import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout as logoutAction } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutAction());
  try {
    await axios.post("auth/logout");
    dispatch(logoutAction());
  } catch (err) {
    console.error("Error during logout:", err);
    // Optionally handle any errors that might occur during logout
  }
};