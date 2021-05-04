import { createSelector } from "reselect";

const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getAllContacts = (state) => state.contacts.items;

const showFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getLoading,
  getFilter,
  getAllContacts,
  showFilteredContacts
};