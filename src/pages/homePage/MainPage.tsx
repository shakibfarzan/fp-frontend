import React, { useEffect, useState } from 'react';
// import fakeMovies from '../../fakeData/fakedata';
import CardList from './CardList';
import Header from './Header';
import Table from './Table';
import Movie from '../../types/Movie';
import { READ_ALL_MOVIES } from '../../api';
import axios from '../../api/axios';

const MainPage = (): React.ReactElement => {
  const [isTableView, setIsTableView] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<Movie>>();

  useEffect(() => {
    axios.get(READ_ALL_MOVIES).then((response) => {
      const data = response.data.body;
      setMovies(data);
    });
  }, [movies]);

  return (
    <div>
      <Header isTableView={isTableView} setIsTableView={setIsTableView} />
      {isTableView ? <Table movies={movies} /> : <CardList movies={movies} />}
    </div>
  );
};

export default MainPage;
