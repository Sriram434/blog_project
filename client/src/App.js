import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './components/Navbar';
import { Blogs } from "./components/Blogs";
import './App.css';

function App() {
  const [data, setData] = useState();
  const apiCall = async () => {
    const res = await axios.get('http://localhost:8083/')
    if (res.status === 200) {
      setData(res.data)
    }
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div className="App">
      <Navbar apiCall={apiCall} />
      <Blogs data={data} apiCall={apiCall} />
    </div>
  );
}

export default App;
