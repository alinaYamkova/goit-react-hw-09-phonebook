import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import s from "../ContactList/phonebook.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filterVal = useSelector(contactsSelectors.getFilter);
  const onChangeFilter = useCallback((e) =>
    dispatch(filterContacts(e.target.value))
  );

  return (
    <label className={s.filter_label}>
      To make filter by Name
      <input
        className={s.filter_input}
        type="text"
        value={filterVal}
        onChange={onChangeFilter}
      />
    </label>
  );
}

// Filter.propTypes = {
//   filterVal: PropTypes.string.isRequired,
//   onChangeFilter : PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   filterVal: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChangeFilter: (e) => dispatch(filterContacts(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
