import logo from './logo.svg';
import './App.css';
import Tours from './copmonents/Tours';
import data from './data.js'
import { useState } from 'react';

function App() {
  
  const [tours,setTours]=useState(data);
 
  function removeTour(id){
      const newTours=tours.filter(tour => tour.id !== id)
      setTours(newTours)
  }
  
  return (
    <div>
      <Tours tours={tours} removeTours={removeTour}></Tours>
    </div>
);
}
export default App;
