import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import PostsManagement from './pages/PostsManagement';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/postsManagement" element={<PostsManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard/subscription" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
