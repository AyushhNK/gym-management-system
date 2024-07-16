import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LoginContext from '../contexts/logincontext';

const BookingsList = () => {
  const { data } = useContext(LoginContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/booking')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  const userBookings = bookings.filter(booking => booking.user === data.User_Id);

  const removeBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:8000/api/booking/${bookingId}`);
      setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
      alert('Booking removed successfully!');
    } catch (error) {
      console.error('There was an error removing the booking!', error);
      alert('Error removing booking.');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Bookings List</h1>
      <div className="flex flex-col space-y-4">
        {userBookings.map(booking => (
          <div key={booking.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
              <div>
                <p className="text-lg font-semibold text-gray-800">Class Name: {booking.gym_class_name}</p>
                <p className="text-gray-600">Booked At: {new Date(booking.booked_at).toLocaleString()}</p>
                <p className="text-gray-600">User ID: {booking.user}</p>
                <p className="text-gray-600">Gym Class ID: {booking.gym_class}</p>
              </div>
              <button 
                onClick={() => removeBooking(booking.id)} 
                className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsList;
