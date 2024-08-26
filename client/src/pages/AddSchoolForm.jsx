
import { useState } from 'react';
import axios from 'axios';

const AddSchoolForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/schools/addSchool', {
        name,
        address,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      });

      setMessage(response.data.message);
      // Clear the form
      setName('');
      setAddress('');
      setLatitude('');
      setLongitude('');
    } catch (error) {
      console.error('Error adding school:', error);
      setMessage('Failed to add school.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New School</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">School Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter school name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter school address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter latitude"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter longitude"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Add School
        </button>
      </form>
    </div>
  );
};

export default AddSchoolForm;
