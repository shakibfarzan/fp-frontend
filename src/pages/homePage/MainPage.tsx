import React from 'react';
import movies from '../../fakeData/fakedata';
import Header from './Header';
import Table from './Table';

const MainPage = (): React.ReactElement => {
  return (
    <div>
      <Header />
      <Table movies={movies} />
    </div>
  );
};

export default MainPage;
