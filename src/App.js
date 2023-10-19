
import './App.css';

import Second from './component/Second';
import First from './page2/First'
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // const [data, setData] = useState("My boy")
  // const [data1, setData1] = useState("My baby")
  // useEffect(() => {
  //   console.log("change", data)
  // }, [data])
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  return (
    <>
      <Routes>
        <Route path="/" element={<Second />} />
        <Route path="/about" element={<First />} />
      </Routes>

    </>
  )
}

export default App;
