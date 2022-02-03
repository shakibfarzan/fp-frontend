import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import Header from './Header';
import Table from './Table';
import Movie from '../../types/Movie';
import axios from '../../api/axios';
import { getFilteredURL, getParams } from './utils';

const MainPage = (): React.ReactElement => {
  const [isTableView, setIsTableView] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<Movie>>();
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const [releasedYearValue, setReleasedYearValue] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    axios
      .get(getFilteredURL(searchValue, releasedYearValue), {
        params: getParams(searchValue, releasedYearValue),
      })
      .then((response) => {
        const data = response.data.body;
        setMovies(data);
      });
  }, [releasedYearValue, searchValue]);

  return (
    <div>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        releasedYearValue={releasedYearValue}
        setReleasedYearValue={setReleasedYearValue}
        isTableView={isTableView}
        setIsTableView={setIsTableView}
      />
      {isTableView ? <Table movies={movies} /> : <CardList movies={movies} />}
    </div>
  );
};

export default MainPage;
