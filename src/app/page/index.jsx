import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  fetch('/api')
    .then(a => a.text())
    .then(console.log)

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>

      </Routes>
    </BrowserRouter >
  )
}

export default App