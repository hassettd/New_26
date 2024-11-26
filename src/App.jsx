import { useState } from 'react'
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";
import './App.css'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    {selectedContactId ? (
      <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} />
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/> 
    )}
    </>
  );
}


