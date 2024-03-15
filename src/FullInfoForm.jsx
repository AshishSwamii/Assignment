import React, { useState } from 'react';

function FullInfoForm({ onPrevious, onClear }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDOB] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleClear = () => {
    setName('');
    setAddress('');
    setDOB('');
    setMobileNumber('');
    setEmail('');
  };

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
  };

  return (
    <div style={{ backgroundColor: 'grey', padding: '20px', border: '1px solid black', borderRadius: '5px'}}>
      <h2>Complete Information</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          style={{marginLeft:"63px"}}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
         style={{marginLeft:"50px"}}
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
         style={{marginLeft:"20px"}}
          type="text"
          id="dob"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
         style={{marginLeft:"1px"}}
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
         style={{marginLeft:"10px"}}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
       style={{marginRight:"120px",marginTop:"30px"}}
      onClick={handlePrevious}>Previous</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default FullInfoForm;
