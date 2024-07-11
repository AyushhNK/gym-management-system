import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../loader/loader'

const TrainerComponent = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios.get('http://localhost:8000/api/trainers')
      .then(response => {
        setTrainers(response.data);
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching the trainers data', error);
      });
  }, []);

  return (
    <>
    {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container mx-auto p-4">

      <h1 className="text-4xl font-bold mb-4 text-center">Gym Trainers</h1>
      <div className="flex flex-wrap justify-center">
        {trainers.map(trainer => (
          <div key={trainer.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={trainer.profile_picture} alt={`${trainer.first_name} ${trainer.last_name}`} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{trainer.first_name} {trainer.last_name}</div>
              <p className="text-gray-700 text-base">{trainer.bio}</p>
              <p className="text-gray-700 text-base"><strong>Specialties:</strong> {trainer.specialties}</p>
              <p className="text-gray-700 text-base"><strong>Certifications:</strong> {trainer.certifications}</p>
              <p className="text-gray-700 text-base"><strong>Experience:</strong> {trainer.experience_years} years</p>
              <p className="text-gray-700 text-base"><strong>Contact:</strong> {trainer.email}, {trainer.phone_number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
      )}
    </>
  );
};

export default TrainerComponent;
