import { useState, useEffect } from 'react';

import './App.css';

import { Navigate, Routes, Route } from 'react-router-dom'
// import axios for fetching data
import axios from 'axios'
// better way importing Conponent
import * as components from './components/index'

const App = () => {
  const [getContacts, setContacts] = useState([]);
  // use loading 
  const [loading, setLoading] = useState(false)
  // type group
  // const [groups, setGroup] = useState({});
  // fetch API

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // fetch contact user
        const { data: contactsData } = await axios.get('http://localhost:9000/contacts');

        console.log(contactsData)
        // fetch contact user type
        // const { data: groupData } = await axios.get('http://localhost9000/group');
        // set
        setContacts(contactsData);
        // setGroup(groupData);
        setLoading(false)
      }
      catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <components.Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/contacts' />} />
        <Route path='/contacts' element={<components.Contacts Contacts={getContacts} loading={loading} />} />
        <Route path='/contacts/Add' element={<components.AddContact />} />
        <Route path='contacts/:contactId' element={<components.ViewContact />} />
        <Route path='contacts/Edit/:contactId' element={<components.EditContact />} />

      </Routes>

    </div>
  );
}

export default App;
