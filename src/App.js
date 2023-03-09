import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="emailVerification" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
