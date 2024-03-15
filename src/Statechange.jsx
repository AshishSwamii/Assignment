import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm';
import FullInfoForm from './FullInfoForm';

const Statechange = () => {
  const [step, setStep] = useState(1);

  const handlePersonalInfoNext = () => {
    setStep(2);
  };

  const handleContactInfoNext = () => {
    setStep(3);
  };

  

  const handlePrevious = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div>
      {step === 1 && (
        <PersonalInfoForm
          onNext={handlePersonalInfoNext}
        />
      )}
      {step === 2 && (
        <ContactInfoForm
          onNext={handleContactInfoNext}
          onPrevious={handlePrevious}
        />
      )}
      {step === 3 && (
        <FullInfoForm
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default Statechange;
