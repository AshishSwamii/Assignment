import React, { useEffect, useState } from 'react';
const PersonalInfoForm = ({ onNext }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
 
  const handleNextClick = () => {
    // form validation before moving to the next step
    if (name.trim() !== '' && address.trim() !== '' && dob.trim() !== '') {
      onNext();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
    <div style={{ backgroundColor: 'grey', padding: '20px', border: '1px solid black', borderRadius: '5px'}}>
      <h2>Personal Information</h2>
        <div>
          <label>Name:</label>
          <input
            style={{marginLeft:"50px"}}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
          style={{marginLeft:"35px"}}
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
           style={{marginLeft:"3px"}}
            type="number"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div> 
        <button 
         style={{marginTop:"20px",height:"40px",marginLeft:"220px"}}
        onClick={handleNextClick}>Next</button>
      </div>
      </div>
  );
};

export default PersonalInfoForm;
