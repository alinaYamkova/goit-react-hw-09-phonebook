import React from "react";
import ContactForm from "../components/ContactForm/FormPhonebook";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

const ContactsView = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;