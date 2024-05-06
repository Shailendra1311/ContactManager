// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'contacts';

// utils/storage.js

export const saveContact = async (contact) => {
    try {
      console.log('Contact to save:', contact); // Add this line to check the contact data being saved
      const existingContacts = await AsyncStorage.getItem(STORAGE_KEY);
      let updatedContacts = existingContacts ? JSON.parse(existingContacts) : [];
      updatedContacts.push(contact);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedContacts));
      return true;
    } catch (error) {
      console.error('Error saving contact:', error);
      return false;
    }
  };
  

export const updateContact = async (contact) => {
  try {
    let existingContacts = await AsyncStorage.getItem(STORAGE_KEY);
    existingContacts = existingContacts ? JSON.parse(existingContacts) : [];
    const index = existingContacts.findIndex((c) => c.id === contact.id);
    if (index !== -1) {
      existingContacts[index] = contact;
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existingContacts));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating contact:', error);
    return false;
  }
};

export const deleteContact = async (id) => {
  try {
    let existingContacts = await AsyncStorage.getItem(STORAGE_KEY);
    existingContacts = existingContacts ? JSON.parse(existingContacts) : [];
    existingContacts = existingContacts.filter((contact) => contact.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existingContacts));
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    return false;
  }
};

export const getAllContacts = async () => {
  try {
    const contacts = await AsyncStorage.getItem(STORAGE_KEY);
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};
