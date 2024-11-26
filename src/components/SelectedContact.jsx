import { useState, useEffect } from 'react'

export default function SelectedContact ({selectedContactId, setSelectedContactId} ) {
    const [contact, setContact] = useState(null);
    useEffect(()=>{
        const getContact = async () => {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json();
            setContact(result);
            
        }
        getContact()
        
    },[])
    return (
        <table>
        <thead>
            <tr>
                <th colSpan="3">Selected Contact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {contact && <tr
        onClick={() => {
          setSelectedContactId(null);
          }}
          >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>}
        </tbody>
     </table>
    )
}