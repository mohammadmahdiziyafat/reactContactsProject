import { useState } from 'react';

import './App.css';

import {Navigate , Routes , Route} from 'react-router-dom'
// better way importing Conponent
import {
  AddContact,
  EditContact,
  ViewContact,
  Contact,
  Contacts,
  Navbar
} from './components/index'

const App = () => {
  const [getContacts, setContacts] = useState([]);
  // use loading 
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/' element ={<Navigate to = '/contacts' />} />
        <Route path ='/contacts' element ={<Contacts Contacts={getContacts} loading={loading}/>}/>
        <Route path ='/contacts/Add' element ={<AddContact/>}/>
        <Route path = 'contacts/:contactId' element ={<ViewContact /> }/>
        <Route path='contacts/Edit/:contactId' element = {<EditContact />}/>

      </Routes>

    </div>
  );
}

export default App;
