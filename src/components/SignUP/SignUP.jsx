// SignupForm.jsx
import { Link, NavLink } from 'react-router-dom';

import React, { useState } from 'react';

const SignupForm = () => {
  const [userType, setUserType] = useState('student');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSignup = async () => {
    // Implement your signup logic here
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userType,
          username,
          email,
          password,
          collegeName,
          companyName,
        }),
      });

      if (response.ok) {
        // Redirect to login page or handle success as needed
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="userType" className="block text-sm font-medium text-gray-600">
            I am a
          </label>
          <select
            id="userType"
            name="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="student">Student</option>
            <option value="college">College</option>
            <option value="company">Company</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {userType === 'college' && (
          <div className="mb-4">
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-600">
              College Name
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        )}

        {userType === 'company' && (
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        )}

        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded-md w-full"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
