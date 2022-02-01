import React, { useState } from 'react';
import movies from '../../fakeData/fakedata';
import CardList from './CardList';
import Header from './Header';
import Table from './Table';

const MainPage = (): React.ReactElement => {
  const [isTableView, setIsTableView] = useState<boolean>(false);
  return (
    <div>
      <Header isTableView={isTableView} setIsTableView={setIsTableView} />
      {isTableView ? <Table movies={movies} /> : <CardList movies={movies} />}
    </div>
  );
};

export default MainPage;
