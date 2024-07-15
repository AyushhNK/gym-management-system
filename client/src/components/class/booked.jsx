import React, { useState, useEffect } from 'react';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/booking')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bookings List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {bookings.map(booking => (
          <div key={booking.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">Booking ID: {booking.id}</p>
              <p className="text-gray-600">Booked At: {new Date(booking.booked_at).toLocaleString()}</p>
              <p className="text-gray-600">User ID: {booking.user}</p>
              <p className="text-gray-600">Gym Class ID: {booking.gym_class}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsList;
