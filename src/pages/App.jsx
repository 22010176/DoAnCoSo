import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";

import Counter from "./Counter";
import Home from "./Home";
import BaoMatPage from "./BaoMat";

function App() {
  useEffect(() => {
    // axios.get('/api')
    //   .then(function (response) {
    //     console.log(response)
    //   })
  }, [])

  return (
    <BaoMatPage />
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="/baomat" element={<BaoMatPage />} />
    //     <Route path="/about" element={<h1>Page About</h1>} />
    //     <Route path="/counter" element={<Counter />} />
    //   </Routes>
    // </BrowserRouter >
  );
}

export default App;