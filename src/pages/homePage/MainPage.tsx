import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import Header from './Header';
import Table from './Table';
import Movie from '../../types/Movie';
import axios from '../../api/axios';
import { getFilteredURL, getParams } from './utils';
import ScrollToTop from '../../components/ScrollToTop';

const MainPage = (): React.ReactElement => {
  const [isTableView, setIsTableView] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
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
        setLoading(false);
      })
      .catch((res) => {
        setMovies([]);
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
      {!isLoading &&
        (isTableView ? (
          <Table movies={movies} />
        ) : (
          <CardList movies={movies} />
        ))}
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
