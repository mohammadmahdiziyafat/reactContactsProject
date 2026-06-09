import { useState } from 'react';

import './App.css';

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
      <Contacts Contacts={getContacts} loading={loading} />
    </div>
  );
}

export default App;
