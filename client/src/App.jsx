import React, { useState, useEffect } from 'react';
import Login from './components/authorization/login';
import Register from './components/authorization/register';
import Navbar from './components/NavFoo/Navbar';
import Footer from './components/NavFoo/footer';
import TrainerComponent from './components/trainer/trainers';
import Homepage from './components/homepage/homepage';
import UserProfile from './components/homepage/profile';
import LogoLoader from './components/loader/logoloader';
import Loader from './components/loader/loader'
import GymClassList from './components/class/gymclass'
import BookingList from './components/class/booked'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginContext from './components/contexts/logincontext'


const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: 'https://via.placeholder.com/150',
  about: 'Fitness enthusiast and personal trainer. Love helping people achieve their fitness goals.',
  membershipStartDate: 'January 1, 2020',
  membershipType: 'Gold',
  nextBillingDate: 'August 1, 2024',
  phone: '123-456-7890',
  address: '123 Fitness St, Gym City, Workoutland',
  socialMedia: {
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    instagram: 'https://instagram.com/johndoe',
  },
  recentActivities: [
    'Attended Yoga class on July 10, 2024',
    'Completed 5K run on July 8, 2024',
    'Started new diet plan on July 1, 2024',
  ],
};

function App() {
  const [data,setData]=useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  }, []);

  return (
    <>
      <LoginContext.Provider value={{data,setData}}>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={
              <>
                {loading ? (
                <LogoLoader />
                  ) : (
                <Homepage/>
                      )}
              </>
              }></Route>
              <Route path="/login" element={
              <>
                <Login/>
              </>
              }></Route>
              <Route path="/signup" element={
              <>
                <Register/>
              </>
              }></Route>
              <Route path="/profile" element={
              <>
                <UserProfile user={user}/>
              </>
              }></Route>
              <Route path="/trainers" element={
              <>
                <TrainerComponent/>
              </>
              }></Route>
              <Route path="/classes" element={
              <>
                <GymClassList/>
              </>
              }></Route>
              <Route path="/bookings" element={
              <>
                <BookingList/>
              </>
              }></Route>
          </Routes>
      <Footer/>  
      </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App;
