import React from 'react';
import Card from '../../components/Card';
import Movie from '../../types/Movie';

type Props = {
  movies: Array<Movie>;
};

const CardList = ({ movies }: Props): React.ReactElement => {
  return (
    <div className="grid flex-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {movies.map((m) => (
        <Card
          key={m.id}
          id={m.id}
          alt={m.name}
          poster={m.poster}
          title={m.name}
          releasedYear={m.releasedYear}
          className="rounded-md shadow-lg bg-gray-50"
        />
      ))}
    </div>
  );
};

export default CardList;
