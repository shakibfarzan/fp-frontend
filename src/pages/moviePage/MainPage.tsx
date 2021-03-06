import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { READ_SINGLE_MOVIE, POSTER_URL } from '../../api';
import axios from '../../api/axios';
import ScrollToTop from '../../components/ScrollToTop';
import Movie from '../../types/Movie';
import Header from './Header';

const MainPage = (): React.ReactElement => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [shouldRefresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  const refresh = (): void => {
    setRefresh(true);
  };

  useEffect(() => {
    axios
      .get(READ_SINGLE_MOVIE, {
        params: { id },
      })
      .then((res) => {
        const data = res.data;
        setMovie(data);
        setLoading(false);
        setRefresh(false);
      });
  }, [id, shouldRefresh]);

  return (
    <div>
      <Header id={id} movie={movie} refresh={refresh} />
      {isLoading && (
        <div className="absolute shadow-2xl top-1/2 left-1/2 backdrop-blur-md">
          <Spin size="large" />
        </div>
      )}
      {!isLoading && (
        <div className="grid flex-1 gap-8 md:grid-cols-2">
          <div className="p-4 backdrop-blur-sm">
            <h2 className="font-serif text-3xl font-bold text-slate-700 text-shadow-md">
              {movie?.name}
            </h2>
            <p className="font-serif text-xl font-bold text-slate-900">
              {movie?.description}
            </p>
            <p className="font-bold text-left text-slate-900">
              <span className="font-normal text-slate-700">Released Year:</span>{' '}
              {movie && movie.releasedYear > new Date().getFullYear()
                ? 'Coming soon...'
                : movie?.releasedYear}
            </p>
          </div>
          <div>
            <img
              src={`${POSTER_URL}/${movie?.poster}`}
              alt={movie?.name}
              className="w-full rounded img-shadow"
            />
          </div>
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
