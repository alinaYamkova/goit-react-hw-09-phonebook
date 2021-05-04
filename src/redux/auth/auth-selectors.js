// import "react-bootstrap/dist/react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const authSelectors = { getIsAuthenticated, getUserName, getUserEmail };
export default authSelectors;