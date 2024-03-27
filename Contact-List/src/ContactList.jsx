// This component returns the value of the 'name' object.
export const GetContactsName = ({contactsName}) => {
  return (
  <ul>
    {
      contactsName.map((thisContact) => {
        return <li key={thisContact.id}>{thisContact.name}</li>
     })
    }
  </ul>
  )
};


// This compoment returns the value of the 'email' object.
export const GetContactsEmail = ({contactsEmail}) => {
  return (
  <ul>
    {
      contactsEmail.map((thisContact) => {
        return <li key={thisContact.id}>{thisContact.email}</li>
     })
    }
  </ul>
  )
};


// This component returns the value of the 'phone' object.
export const GetContactsPhoneNum = ({contactsPhoneNum}) => {
  return (
  <ul>
    {
      contactsPhoneNum.map((thisContact) => {
        return <li key={thisContact.id}>{thisContact.phone}</li>
     })
    }
  </ul>
  )
};