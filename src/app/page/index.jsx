import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainRoute from "../../feature/main/page"

function App() {
  fetch('/api')
    .then(a => a.text())
    .then(console.log)

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/*" element={<MainRoute />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App