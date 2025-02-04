import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Counter from "./Counter/ui";

function App() {
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Page Home</h1>} />
        <Route path="/about" element={<h1 className="">Page About</h1>} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;