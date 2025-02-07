import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import axios from "axios";

import Counter from "./Counter/ui";
import Home from "./Home";

function App() {
  useEffect(() => {
    axios.get('/api')
      .then(function (response) {
        console.log(response)
      })
    // fetch('/api')
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<h1>Page About</h1>} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;