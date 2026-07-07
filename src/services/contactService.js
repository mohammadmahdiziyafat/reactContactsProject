import axios from "axios";


const SERVER_URL = 'http://localhost:9000';

// @desc Get contacts With Contact
// @route Get http://localhost:900/contacts
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`
    return axios.get(url)
}

// @desc Get contacts With ContactId
// @route Get http://localhost:900/contacts/:contactId
export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.get(url)
}

// @desc Get Groups With Group
// @route Get http://localhost:900/group
export const getAllGroups = () => {
    const url = `${SERVER_URL}/group`;
    return axios.get(url)
}

// @desc Get Groups With GroupId
// @route Get http://localhost:900/group/:groupId
export const getGroup = (groupId) => {
    const url = `${SERVER_URL}/group/${groupId}`;
    return axios.get(url)
}

/// @desc  Create New Contact
// @route POST http://localhost:900/contacts
export const createContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact)
}

// @desc update Contact
// @route Get http://localhost:900/contacts/:ContactId
export const updateContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
};

// @desc delete Contacts
// @route Get http://localhost:900/contacts/:contactId
export const deleteContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}