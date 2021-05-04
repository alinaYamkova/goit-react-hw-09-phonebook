import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

// const style = {
//   link: {
//     display: "inline-block",
//     textDecoration: "none",
//     padding: 12,
//     fontWeight: 900,
//     color: "#ffffff",
//   },
//   activeLink: {
//       color: "red",
//   },
// };

const Navigation = ({ isAuthenticated }) => {
  return (
    // <div>
      <nav>
        <NavLink
          to={routes.home}
          exact
          className={s.NavLink}
          activeClassName={s['NavLink-active']}
        >
          Home
        </NavLink>
        {isAuthenticated && (
          <NavLink
            to={routes.contacts}
            exact
            className={s.NavLink}
            activeClassName={s['NavLink-active']}
          >
            Phonebook
          </NavLink>
        )}
      </nav>
    // </div>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
