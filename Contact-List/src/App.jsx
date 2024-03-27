import { useEffect, useState } from 'react'
import './App.css'
import { GetContactsEmail, GetContactsName, GetContactsPhoneNum } from './ContactList.jsx';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const json = await response.json();
        setContacts(json);

        console.log(json);
      }

      getContacts()
    }, []);


  return (
    <>
      <h1>Contacts Information</h1>

      <section id="main">
        <section id="name">
          <h2>Name</h2>
          <GetContactsName contactsName={contacts}/>
        </section>

        <section id="email">
          <h2>Email</h2>
          <GetContactsEmail contactsEmail={contacts}/>
        </section>

        <section id="phoneNum">
          <h2>Phone</h2>
          <GetContactsPhoneNum contactsPhoneNum={contacts}/>
        </section>
      </section>
    </>
  )
}

export default App