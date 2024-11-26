// src/Redux/Actions/User.js
import axios from "axios"; // Ensure you import axios directly from "axios"
import {
    USER_LOGIN_REQ,
    USER_LOGIN_REQ_FAIL,
    USER_LOGIN_REQ_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_REQ,
    USER_REGISTER_REQ_FAIL,
    USER_REGISTER_REQ_SUCCESS,
} from "/src/Redux/Constants/User.js";
import { BASE_URL } from "/src/Redux/Constants/BASE_URL.js";

// User login action
export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQ });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(`${BASE_URL}/api/users/login`, { email, password }, config);

        dispatch({ type: USER_LOGIN_REQ_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message; // Safely access error message
        dispatch({
            type: USER_LOGIN_REQ_FAIL,
            payload: errorMessage,
        });
    }
};

// User logout action
export const userLogoutAction = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    document.location.href = "/login";
};

// User registration action
export const userRegisterAction = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQ });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(`${BASE_URL}/api/users/register`, { name, email, password }, config); // Correct URL

        dispatch({ type: USER_REGISTER_REQ_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_REQ_SUCCESS, payload: data }); // Auto-login after registration
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message; // Safely access error message
        dispatch({
            type: USER_REGISTER_REQ_FAIL,
            payload: errorMessage,
        });
    }
};
