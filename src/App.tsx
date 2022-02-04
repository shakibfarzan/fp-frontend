import React from 'react';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import HomePage from './pages/homePage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MoviePage from './pages/moviePage/MainPage';
import { ToastContainer } from 'react-toastify';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="mt-4 mb-4 ml-16 mr-16 App">
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'movies'} element={<HomePage />} />
          <Route path={'movies/:id'} element={<MoviePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer className="h-3"></footer>
    </BrowserRouter>
  );
}

export default App;
