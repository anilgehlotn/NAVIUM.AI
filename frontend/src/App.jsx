import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Coding from './pages/Coding';
import Search from './pages/Search';
import PDF from './pages/PDF';
import PPT from './pages/PPT';
import Images from './pages/Images';
import Billing from './pages/Billing';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pdf" element={<PDF />} />
        <Route path="/ppt" element={<PPT />} />
        <Route path="/images" element={<Images />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
