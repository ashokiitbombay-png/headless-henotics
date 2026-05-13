"use client";

import React from 'react';

export default function AppointmentForm() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Book an Appointment</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" 
            placeholder="Enter your name" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" 
            placeholder="Enter your phone number" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Request Callback
        </button>
      </form>
    </div>
  );
}