import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MainPage from './pages/homePage/MainPage';

function App(): React.ReactElement {
  return (
    <div className="mt-4 mb-4 ml-16 mr-16 App">
      <MainPage />
    </div>
  );
}

export default App;
