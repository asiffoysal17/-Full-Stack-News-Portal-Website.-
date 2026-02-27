import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";

import Home from "./Pages/Home";
import News from "./Pages/News";
import SingleNews from "./Pages/SingleNews";
import Login from "./Pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Content */}
      <div className="flex container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
