import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import s from "./appBar.module.css";

const AppBar = ({isAuthenticated}) => {
  return (
    <header className={s.AppBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated (state),
});

export default connect(mapStateToProps)(AppBar);
