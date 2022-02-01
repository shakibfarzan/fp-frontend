import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './pages/homePage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MoviePage from './pages/moviePage/MainPage';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <div className="mt-4 mb-4 ml-16 mr-16 App">
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'movies'} element={<HomePage />} />
          <Route path={'movies/:id'} element={<MoviePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
