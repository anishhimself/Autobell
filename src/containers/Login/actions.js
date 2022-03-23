/*
 *
 * Login actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';
import { push } from 'connected-react-router';

import {
  LOGIN_CHANGE,
  LOGIN_RESET,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
  SET_LOGIN_SUBMITTING
} from './constants';
import { setAuth, clearAuth } from '../Authentication/actions';
import setToken from '../../utils/token';
import handleError from '../../utils/error';
import { clearCart } from '../Cart/actions';
import { clearAccount } from '../Account/actions';
import { allFieldsValidation } from '../../utils/validation';

export const loginChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: LOGIN_CHANGE,
    payload: formData
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    const rules = {
      email: 'required|email|max:255|min:6',
      password: 'required|min:6'



      // |max:20|alpha_num|no_spaces|must_contain_number|must_contain_letter|must_contain_upper_case|must_contain_lower_case|must_contain_symbol



    };

    const user = getState().login.loginFormData;

    const { isValid, errors } = allFieldsValidation(user, rules, {
      'required.email': 'Email is required.',
      'email.email': 'Email format is invalid.',
      'required.password': 'Password is required.',
      'min.password': 'Password must be at least 6 characters.',
      'max.password': 'Password must be at most 20 characters.',
      'alpha_num.password': 'Password must contain letters and numbers.',
      'no_spaces.password': 'Password must not contain spaces.',
      'must_contain_number.password': 'Password must contain at least one number.',
      'must_contain_letter.password': 'Password must contain at least one letter.',
      'must_contain_upper_case.password': 'Password must contain at least one uppercase letter.',
      'must_contain_lower_case.password': 'Password must contain at least one lowercase letter.',
      'must_contain_symbol.password': 'Password must contain at least one symbol.'
      
    });

    if (!isValid) {
      return dispatch({ type: SET_LOGIN_FORM_ERRORS, payload: errors });
    }

    dispatch({ type: SET_LOGIN_SUBMITTING, payload: true });
    dispatch({ type: SET_LOGIN_LOADING, payload: true });

    try {
      const response = await axios.post('/api/auth/login', user);

      const firstName = response.data.user.firstName;

      const successfulOptions = {
        title: `Hey${firstName ? ` ${firstName}` : ''}, Welcome Back!`,
        position: 'tr',
        autoDismiss: 1
      };

      localStorage.setItem('token', response.data.token);

      setToken(response.data.token);

      dispatch(setAuth());
      dispatch(success(successfulOptions));

      dispatch({ type: LOGIN_RESET });
    } catch (error) {
      const title = `Please try to login again!`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_LOGIN_SUBMITTING, payload: false });
      dispatch({ type: SET_LOGIN_LOADING, payload: false });
    }
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    const successfulOptions = {
      title: `You have signed out!`,
      position: 'tr',
      autoDismiss: 1
    };

    dispatch(clearAuth());
    dispatch(clearAccount());
    dispatch(push('/login'));

    localStorage.removeItem('token');

    dispatch(success(successfulOptions));
    // dispatch(clearCart());
  };
};
