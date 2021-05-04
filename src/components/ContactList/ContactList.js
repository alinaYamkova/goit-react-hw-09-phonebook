import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import Loader from '../../data/Loader';
import PropTypes from 'prop-types';
import s from './phonebook.module.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { isLoading, contacts, onDeleteContact } = this.props;

    return (
      <>
        {isLoading && (
          <h1 className={s.loading}>
            <Loader />
          </h1>
        )}
          <ol>
            {contacts.map(({ id, name, number }) => (
              <li className={s.list} key={id}>
                <p className={s.text}>{name}, </p>
                <p className={s.text}>tlf.: {number}</p>
                <button
                  type="button"
                  className={s.btn_del}
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.showFilteredContacts(state),
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContact: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
