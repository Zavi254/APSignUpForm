import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Verified from "./pages/Verified";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="emailVerification" element={<EmailVerification />} />
        <Route path="verified" element={<Verified />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
