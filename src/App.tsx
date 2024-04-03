import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages/auth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Loumo</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
