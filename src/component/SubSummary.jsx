import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmissionSummary = ({ submittedData }) => {
  const navigate = useNavigate();

  if (!submittedData) {
    return <div>No data submitted yet.</div>;
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-950'>
    <div className="p-8 max-w-md mx-auto mt-10 p-5 border border-gray-700 rounded-md shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-5">Submitted Data By You</h2>
      <p className="text-white font-bold"><strong>Name:</strong> {submittedData.name}</p>
      <p className="text-white font-bold"><strong>Email:</strong> {submittedData.email}</p>
      <p className="text-white font-bold"><strong>Age:</strong> {submittedData.age}</p>
      <p className="text-white font-bold"><strong>Attending with Guest:</strong> {submittedData.attendingWithGuest}</p>
      {submittedData.attendingWithGuest === 'Yes' && (
        <p className="text-white  font-bold"><strong>Guest Name:</strong> {submittedData.guestName}</p>
      )}
      <button
        onClick={() => navigate('/')}
        className="mt-5 py-2 px-4 bg-blue-500 text-white rounded-md"
      >
        Back
      </button>
    </div>
    </div>
  );
};

export default SubmissionSummary;
