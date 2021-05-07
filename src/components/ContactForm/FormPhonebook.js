import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import s from "../ContactList/phonebook.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newName = contacts.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );

      if (newName) {
        alert(`${name} is already in a list`);
        return;
      }

      dispatch(contactsOperations.addContact({ name, number }));
      reset();
    },
    [contacts, dispatch, name, number]
  );

  const reset = () => {
    this.setState({ name: "", number: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            // id={uuidv4()}
            className={s.input}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="name"
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            // id={uuidv4()}
            value={number}
            onChange={handleChange}
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
