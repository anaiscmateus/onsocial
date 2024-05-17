// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Success from './pages/Success';
import Loading from './components/Loading';
import 'animate.css/animate.min.css';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Create a new Image object
    const img = new Image();
    img.src = '/images/philly.jpg'; // Replace with the actual path to your background image

    // Handle the image load event
    img.onload = () => {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Match the fade-out duration of Animate.css (1s for fadeOut)
      }, 1500); // Additional delay to keep the spinner for longer
    };

    // Clean up
    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading isVisible={!isFadingOut} />
      ) : (
        <div className={`animate__animated animate__fadeIn`}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}
