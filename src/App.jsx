import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ComplaintPage from "./pages/ComplaintPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComplaintPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
