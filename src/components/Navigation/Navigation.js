import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
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
  );
};

// Navigation.propTypes = {
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
