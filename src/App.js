import { useState, useEffect, use } from 'react';

import './App.css';

import { Navigate, Routes, Route, useNavigate } from 'react-router-dom'

// import  services for clean code or refactor
import { getAllContacts, getAllGroups, getGroup, createContact } from './services/contactService';
// better way importing Conponent
import { Contact, AddContact, Contacts, EditContact, ViewContact, Navbar } from './components/index';

const App = () => {
  const [getContacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [groups, setGroup] = useState({});
  const [form, setForm] = useState({
    name: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  })
  const [errors, setErrors] = useState({});
  const navigate = useNavigate({})
  // fetch API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // fetch contact user
        const { data: contactsData } = await getAllContacts();

        console.log(contactsData)
        // fetch contact user type
        const { data: groupData } = await getAllGroups();
        // set
        setContacts(contactsData);
        setGroup(groupData);
        setLoading(false)
      }
      catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const status = await createContact(form);
      console.log(status);
      
      if (status === 201) {
        setForm({});
        navigate("/contacts")
      }
    }
    catch (err) {
      console.log(err.message);

    }
  }

  const setContactInfo = (event) => {
    event.preventDefault()
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })



  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/contacts' />} />
        <Route path='/contacts' element={<Contacts loading={loading} getContacts={getContacts} />} />
        <Route path='/contacts/Add' element={<AddContact form={form} loading={loading} createContactForm={createContactForm} setContactInfo={setContactInfo} groups={groups} />} />
        <Route path='contacts/:contactId' element={<ViewContact />} />
        <Route path='contacts/Edit/:contactId' element={<EditContact />} />

      </Routes>

    </div>
  );
}

export default App;
