import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LoginContext from '../contexts/logincontext';
import { useNavigate } from 'react-router-dom';

const GymClassList = () => {
  const { data } = useContext(LoginContext);
  const [classes, setClasses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classesResponse = await axios.get('http://localhost:8000/api/class');
        setClasses(classesResponse.data);

        if (data) {
          const bookingsResponse = await axios.get(`http://localhost:8000/api/booking?user=${data.User_Id}`);
          setBookings(bookingsResponse.data);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  const bookClass = async (classId) => {
    try {
      if (data != null) {
        await axios.post('http://localhost:8000/api/booking', { gym_class: classId, user: data.User_Id });
        alert('Class booked successfully!');
        // Update bookings state
        const bookingsResponse = await axios.get(`http://localhost:8000/api/booking?user=${data.User_Id}`);
        setBookings(bookingsResponse.data);
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('There was an error booking the class!', error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading classes: {error.message}</p>;

  const isClassBooked = (classId) => {
    return bookings.some(booking => booking.gym_class === classId);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Available Gym Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map(gymClass => (
          <div key={gymClass.id} className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2">{gymClass.name.toUpperCase()}</h2>
            <p className="text-gray-700 mb-4">{gymClass.description}</p>
            <div className="mb-4">
              <p className="text-gray-600"><strong>Instructor:</strong> {gymClass.instructor}</p>
              <p className="text-gray-600"><strong>Start Time:</strong> {new Date(gymClass.start_time).toLocaleString()}</p>
              <p className="text-gray-600"><strong>End Time:</strong> {new Date(gymClass.end_time).toLocaleString()}</p>
              <p className="text-gray-600"><strong>Capacity:</strong> {gymClass.capacity}</p>
            </div>
            <button 
              onClick={() => bookClass(gymClass.id)} 
              disabled={isClassBooked(gymClass.id)}
              className={`w-full ${isClassBooked(gymClass.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded transition duration-300`}
            >
              {isClassBooked(gymClass.id) ? 'Already Booked' : 'Book the Class'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymClassList;
