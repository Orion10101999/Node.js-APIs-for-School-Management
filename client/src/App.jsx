
import { useEffect, useState } from "react";

import SchoolList from './pages/SchoolList'



const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  useEffect(() => {

    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude);
        console.log(longitude);
        setLatitude(latitude);
        setLongitude(longitude);
      }, (error) => {
        console.error(error);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });

      // Cleanup on component unmount
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }
  )
  return (
    <div>
      
      <SchoolList latitude={latitude} longitude={longitude} />
      
    </div>
  );
}

export default App;


