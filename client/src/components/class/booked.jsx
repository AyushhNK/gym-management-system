import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LoginContext from '../contexts/logincontext';

const BookingsList = () => {
  const { data } = useContext(LoginContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/booking?user=${data.User_Id}`)
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);


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
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Bookings List</h1>
      <div className="space-y-4">
        {bookings.map(booking => (
          <div key={booking.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold text-gray-800">Class Name: {booking.gym_class_name}</p>
                <p className="text-gray-600">Booked At: {new Date(booking.booked_at).toLocaleString()}</p>
                <p className="text-gray-600">Start Time: {new Date(booking.start_time).toLocaleString()}</p>
                <p className="text-gray-600">End Time: {new Date(booking.end_time).toLocaleString()}</p>
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
