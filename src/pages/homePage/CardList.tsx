import React from 'react';
import Card from '../../components/Card';
import Movie from '../../types/Movie';
import { Link } from 'react-router-dom';

type Props = {
  movies: Array<Movie>;
};

const CardList = ({ movies }: Props): React.ReactElement => {
  return (
    <div className="grid flex-1 gap-8 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {movies.map((m) => (
        <Link key={m.id} to={`movies/${m.id}`}>
          <Card
            id={m.id}
            alt={m.name}
            poster={m.poster}
            title={m.name}
            releasedYear={m.releasedYear}
            className="rounded-md shadow-lg max-h-545"
          />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
