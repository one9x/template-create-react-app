import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <main>
      <h1>Create React App</h1>
      <p>Deployed to One9x Pages.</p>
      <p><Link to="/about">About</Link></p>
      <p className="note">
        Routing happens in the browser, so this is deployed with <code>--spa</code>.
      </p>
    </main>
  );
}

function About() {
  return (
    <main>
      <h1>About</h1>
      <p>Reached without the server knowing this route exists.</p>
      <p><Link to="/">Home</Link></p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
