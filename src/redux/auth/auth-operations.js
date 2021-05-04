import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const authToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = user => async dispatch => {
  // dispatch(registerRequest());
    console.log(dispatch(registerRequest()));

  try {
    const response = await axios.post('/users/signup', user);
    authToken.set(response.data.token);
    dispatch(registerSuccess(response.data));
    // console.log(dispatch(registerSuccess(response.data)))
  } catch (error) {
    dispatch(registerError(error.message));
    // console.log(dispatch(registerError(error.message)))
  }
};

const loginUser = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', user);
    authToken.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
  console.log(loginUser)
};

const logoutUser = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');
    authToken.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth: { token } } = getState();

  if (!token) {
    return;
  }
  authToken.set(token);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

const authOperations = { registerUser, loginUser, logoutUser, getCurrentUser };
export default authOperations;