import React from 'react';
import {useState} from 'react';

const Person = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const fullName = `${firstName} ${lastName}`;

  return (
    <div>
     <label htmlFor="firstName">First Name:</label>
            <input  type="text"  id="firstName" value={firstName}
            onChange={handleFirstNameChange} /> 
        <br />
    <label htmlFor="lastName">Last Name:</label>
         <input  type="text" id="lastName" value={lastName}
            onChange={handleLastNameChange} />
      <p>Full Name: {fullName}</p>

    </div>
  )
}

export default Person;

