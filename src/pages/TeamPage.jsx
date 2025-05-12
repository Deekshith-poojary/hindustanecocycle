import React, { useState } from 'react';
import teamData from '../Contents/Empdata';

function TeamPage() {
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const emp = teamData[employeeId.trim().toUpperCase()];
    if (emp) {
      setEmployee(emp);
      setError('');
    } else {
      setEmployee(null);
      setError('Employee not found. Please check the ID.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full bg-white rounded-xl shadow-2xl p-6">
        <h2 className="text-xl font-bold text-center mb-4">Search Team Member</h2>
        <input
          type="text"
          placeholder="Enter Employee ID (e.g. EMP001)"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {employee && (
          <div className="mt-6 text-center">
            <img
              src={employee.photo}
              alt={employee.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{employee.name}</h3>
            <p className="text-gray-600">{employee.role}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamPage;
