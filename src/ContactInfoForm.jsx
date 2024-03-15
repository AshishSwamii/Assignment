import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';

function ContactInfoForm({ onNext, onPrevious }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (mobileNumber.trim() !== '' && email.trim() !== '') {
      onNext({ mobileNumber, email });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div style={{ backgroundColor: 'grey', padding: '20px', border: '1px solid black', borderRadius: '5px'}}>
      <h2>Contact Information</h2>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
          style={{marginLeft:"10px"}}
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
           style={{marginLeft:"20px"}}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      <button
       style={{marginTop:"25px",marginRight:"130px"}}
      onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ContactInfoForm;
