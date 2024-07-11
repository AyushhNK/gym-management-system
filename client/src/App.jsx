import React, { useState, useEffect } from 'react';
import Login from './components/authorization/login';
import Register from './components/authorization/register';
import Navbar from './components/NavFoo/Navbar';
import Footer from './components/NavFoo/footer';
import TrainerComponent from './components/trainer/trainers';
import Homepage from './components/homepage/homepage';
import LogoLoader from './components/loader/logoloader';
import Loader from './components/loader/loader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <LogoLoader />
      ) : (
        <>
          {/* <Login /> */}
          {/* <Register /> */}
          {/* <TrainerComponent /> */}
          <Homepage /> 
        </>
      )}
      <Footer/>
    </>
  );
}

export default App;
