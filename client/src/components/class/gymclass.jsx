import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LoginContext from '../contexts/logincontext';

const GymClassList = () => {
  const { data } = useContext(LoginContext);
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
      await axios.post('http://localhost:8000/api/booking', { gym_class: classId, user: data.User_Id });
      alert('Class booked successfully!');
    } catch (error) {
      console.error('There was an error booking the class!', error);
      alert('Error booking class.');
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading classes: {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Available Gym Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map(gymClass => (
          <div key={gymClass.id} className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{gymClass.name}</h2>
            <p className="text-gray-700 mb-4">{gymClass.description}</p>
            <div className="mb-4">
              <p className="text-gray-600"><strong>Instructor:</strong> {gymClass.instructor}</p>
              <p className="text-gray-600"><strong>Start Time:</strong> {new Date(gymClass.start_time).toLocaleString()}</p>
              <p className="text-gray-600"><strong>End Time:</strong> {new Date(gymClass.end_time).toLocaleString()}</p>
              <p className="text-gray-600"><strong>Capacity:</strong> {gymClass.capacity}</p>
            </div>
            <button 
              onClick={() => bookClass(gymClass.id)} 
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
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
