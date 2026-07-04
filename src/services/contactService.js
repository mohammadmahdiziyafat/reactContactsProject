import axios from "axios";
import { Contact } from "../components";

const SEVER_URL = 'http://localhost:9000';

// @desc Get contacts With Contact
// @route Get http://localhost:900/contacts
export const getAllContacts = () => {
    const url = `${SEVER_URL}/contacts`
    return axios.get(url)
}

// @desc Get contacts With ContactId
// @route Get http://localhost:900/contacts/:contactId
export const getContact = (contactId) => {
    const url = `${SEVER_URL}/contacts/${contactId}`
    return axios.get(url)
}

// @desc Get Groups With Group
// @route Get http://localhost:900/group
export const getAllGroups = () => {
    const url = `${SEVER_URL}/group`;
    return axios.get(url)
}

// @desc Get Groups With GroupId
// @route Get http://localhost:900/group/:groupId
export const getGroup = (groupId) => {
    const url = `${SEVER_URL}/group/${groupId}`;
    return axios.get('url')
}

/// @desc  Create New Contact
// @route POST http://localhost:900/contacts
export const createContact = (contact) => {
    const url = `${SEVER_URL}/contacts`;
    return axios.post(url, contact)
}

// @desc update Contact
// @route Get http://localhost:900/contacts/:ContactId
export const updateContact = (contact, contactId) => {
    const url = `${SEVER_URL}/contact/${contactId}`;
    return axios.put(url)
}

// @desc delete Contacts
// @route Get http://localhost:900/contacts/:contactId
export const deleteContact = (contactId) => {
    const url = `${SEVER_URL}/contact/${contactId}`;
    return axios.delete(url);
}