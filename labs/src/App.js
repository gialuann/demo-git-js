import './App.css';
import * as React from 'react';
import Bai2 from './components/clock';
import Sum from './components/sum'
import NumGenerator from './components/MaxMin'
import ChuyenDoiTien from './components/chuyen-doi-tien'
import Gallary from './components/gallary';
import {Routes, Route, Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';



function App() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleChuyenDoiTienClick() {
    navigate('/chuyen-doi-tien')
  }
  function handleRandomClick() {
    navigate('/random')
  }
  function handleClockClick() {
    navigate('/clock')
  }
  function handleGalleryClick() {
    navigate('/gallery')
  }
  function handleGallaryClick(){
    navigate ('/Galary')
  }
  return (
    <div className="App">
      <Bai2/>
      <Sum/>
      <NumGenerator/>
      <ChuyenDoiTien/>
      <Button onClick={handleGallaryClick}> Gallary</Button>
      <Gallary/>
      <Routes>
        <Route path='/gallary' element={<Gallary />} />

        
      </Routes>
    </div>
  );
}

export default App;
