import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import ReisbrennenPage from "./pages/ReisbrennenPage/ReisbrennenPage";
import BmwSyndikatAsphaltfieberPage from "./pages/BmwSyndikatAsphaltfieberPage/BmwSyndikatAsphaltfieberPage";
import AuthProtection from "./hooks/AuthProtection/AuthProtection";
import ScrollToTop from "./hooks/ScrollToTop/ScrollToUp";
import Footer from "./components/Footer/Footer";
import WrongEndPoint from "./pages/WrongEndPoint/WrongEndPoint";

function App() {
  return (
    <div>
      <LoginHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reisbrennen"
          element={
            <AuthProtection>
              <ReisbrennenPage />
            </AuthProtection>
          }
        />
        <Route
          path="/bmw-syndikat-asphaltfieber"
          element={
            <AuthProtection>
              <BmwSyndikatAsphaltfieberPage />
            </AuthProtection>
          }
        />
        <Route path="*" element={<WrongEndPoint />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
