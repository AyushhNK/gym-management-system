import React from 'react';
import Navbar from '../NavFoo/Navbar'; // Adjust the path as per your folder structure
import {Link} from 'react-router-dom'

const Homepage = () => {
  return (
    <>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl ">Welcome to our Gym</h2>
            <p className="text-xl text-gray-800 font-bold tracking-wide uppercase mt-2 ">
              Achieve Your Fitness Goals
              <Link to="bookings">book</Link>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
            </p>
          </div>

          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Example card for trainers */}
              <Link to="/trainers">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/man-trainer.jpg?quality=82&strip=1&w=640" alt="Trainer" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Our Trainers</h3>
                  <p className="mt-2 text-sm text-gray-600">Meet our dedicated trainers who will guide you towards your fitness goals.</p>
                </div>
              </div>
              </Link>

              {/* Example card for classes */}
              <Link to="/classes">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.polar.com/blog/wp-content/uploads/2017/01/What-is-group-fitness_hero.jpg" alt="Classes" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Fitness Classes</h3>
                  <p className="mt-2 text-sm text-gray-600">Explore our variety of fitness classes designed to fit your schedule and needs.</p>
                </div>
              </div>
            </Link>

              {/* Additional card */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img src="https://cms.exercise.com/wp-content/uploads/2023/02/tmpl-gym-1024x633.webp" alt="Facilities" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Our Facilities</h3>
                  <p className="mt-2 text-sm text-gray-600">Discover our state-of-the-art facilities equipped for your fitness journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Homepage;
