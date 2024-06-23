import React, { useState } from 'react';
import { Route, Routes  } from 'react-router-dom';
import './App.css';
import EventRegistrationForm from './component/EventRegistration';
import SubmissionSummary from './component/SubSummary';
import Navbar from './component/Navbar';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (    
      <div className="h-screen bg-black">
        <Navbar/>
        <Routes>
          <Route path="/" element={<EventRegistrationForm setSubmittedData={setSubmittedData}/>}/>
          <Route path="/summary" element={<SubmissionSummary submittedData={submittedData} />}/>
        </Routes>
      </div>    
  );
}

export default App;
