import { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { v4 as uuidv4 } from 'uuid';
import s from "../ContactList/phonebook.module.css";


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { contacts , onSubmit } = this.props;
   
    const newName = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (newName) {
      alert(`${name} is already in a list`);
      return;
    }

    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              id={uuidv4()}
              className={s.input}
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="name"
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              id={uuidv4()}
              value={number}
              onChange={this.handleChange}
              type="text"
              name="number"
              placeholder="number"
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsOperations.addContact(contact)),
});
    
export default connect(mapStateToProps,mapDispatchToProps) (ContactForm);