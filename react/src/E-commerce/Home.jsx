import React from 'react'
import {useState,useEffect} from 'react'

function Home() {
  const images = [
   "/image/7.jpg",
   "/image/9.jpg",
   "/image/8.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h1 className='m-2 text-primary'>Home Components</h1>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <img src={images[currentImageIndex]} alt="hucker" style={{width:"80%",borderRadius: '14px'}} />
      </div>
    </div>
  )
}

export default Home
