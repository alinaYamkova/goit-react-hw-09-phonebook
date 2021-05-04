import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import s from "../ContactList/phonebook.module.css";
import {filterContacts} from "../../redux/contacts/contacts-actions";
import contactsSelectors  from "../../redux/contacts/contacts-selectors";

const Filter = ({ filterVal, onChangeFilter  }) => (
  <label className={s.filter_label}>
    To make filter by Name
    <input
      className={s.filter_input}
      type='text'
      value={filterVal}
      onChange={onChangeFilter }
    />
  </label>
);

Filter.propTypes = {
  filterVal: PropTypes.string.isRequired,
  onChangeFilter : PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterVal: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
