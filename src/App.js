import { useState } from 'react';
import Navbar from './components/Navbar';

import './App.css';
import Contacts from './components/contact/Contacts';

const App = () => {
  const [getContacts, setContacts] = useState([]);
  // use loading 
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Contacts Contacts={getContacts} loading={loading

      } />
    </div>
  );
}

export default App;
