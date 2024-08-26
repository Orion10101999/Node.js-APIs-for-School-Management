import  { useEffect, useState } from 'react';
import axios from 'axios';

const SchoolList = ({latitude , longitude}) => {
  const [schools, setSchools] = useState([]);
  
  const [error, setError] = useState('');

  useEffect(()=>{
    const fetchSchool = async ()=>{
      try {
        const response = await axios.get('http://localhost:3000/api/schools/listSchools', {
          params: {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          },
        });
        
        setSchools(response.data);
        setError('');

      } catch (err) {
        console.error('Error fetching schools:', err);
        setError('Failed to fetch schools. Please check the inputs.');
      }
    }
    fetchSchool() 
  })
  

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      
      
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {schools.length > 0 && (
        <div className="mt-8">
          {
            latitude && longitude && schools ? <h3 className="text-xl font-bold mb-4">List of Schools Near You</h3> : 
            <h3 className="text-xl font-bold mb-4">List of Schools</h3>
          }
         
          <ul>
            {schools.map((school) => (
              <li key={school.id} className="mb-4 p-4 border rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold">{school?.name}</h4>
                <p className="text-gray-700">{school?.address}</p>
                <p className="text-gray-500">Distance: {school?.distance?.toFixed(2)} km</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SchoolList;
