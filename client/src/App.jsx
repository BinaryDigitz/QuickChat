import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Navbar, Footer, Profile } from "./components/exportComp.js";

function App() {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain"  
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
