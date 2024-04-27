import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
const contactsReducer = contactSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export default contactsReducer;
