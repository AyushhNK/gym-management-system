import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GymClassList = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/class');
        setClasses(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const bookClass = async (classId) => {
    try {
      const response = await axios.post('/api/bookings/', { gym_class: classId });
      alert('Class booked successfully!');
    } catch (error) {
      console.error('There was an error booking the class!', error);
      alert('Error booking class.');
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading classes: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Gym Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map(gymClass => (
          <div key={gymClass.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{gymClass.name}</h2>
            <p className="text-gray-700 mb-2">{gymClass.description}</p>
            <p className="text-gray-600 mb-1"><strong>Instructor:</strong> {gymClass.instructor}</p>
            <p className="text-gray-600 mb-1"><strong>Start Time:</strong> {new Date(gymClass.start_time).toLocaleString()}</p>
            <p className="text-gray-600 mb-1"><strong>End Time:</strong> {new Date(gymClass.end_time).toLocaleString()}</p>
            <p className="text-gray-600 mb-1"><strong>Capacity:</strong> {gymClass.capacity}</p>
            <button 
              onClick={() => bookClass(gymClass.id)} 
              className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Book the Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymClassList;
