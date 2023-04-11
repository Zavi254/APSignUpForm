import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Verified from "./pages/Verified";
import Protected from "./pages/Protected";
import { useState } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [isSignedIn, setSignedIn] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isSignedIn, setSignedIn }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="verify-email"
            element={
              <Protected isSignedIn={isSignedIn}>
                <EmailVerification />
              </Protected>
            }
          />
          <Route
            path="account-verified/"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Verified />
              </Protected>
            }
          />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
