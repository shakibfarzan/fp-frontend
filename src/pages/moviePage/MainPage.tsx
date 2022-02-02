import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../fakeData/fakedata';
import Header from './Header';

const MainPage = (): React.ReactElement => {
  const { id } = useParams();
  const movie = getMovie(parseInt(id ? id : '-1'));
  return (
    <div>
      <Header />
      <div className="grid flex-1 gap-8 md:grid-cols-2">
        <div className="p-4 backdrop-blur-sm">
          <h2 className="font-serif text-3xl font-bold text-slate-700">
            {movie?.name}
          </h2>
          <p className="text-xl font-bold text-slate-900">
            {movie?.description}
          </p>
          <p className="font-bold text-left text-slate-900">
            <span className="font-normal text-slate-700">Released Year:</span>{' '}
            {movie?.releasedYear}
          </p>
        </div>
        <div>
          <img src={movie?.poster} alt={movie?.name} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
