import { Button } from 'antd';
import React from 'react';
import MovieForm from '../../components/Form';
import Movie from '../../types/Movie';
import { UPDATE_MOVIE } from '../../api';

const Header = ({
  id,
  movie,
  refresh,
}: {
  id: string | undefined;
  movie: Movie | undefined;
  refresh: () => void;
}): React.ReactElement => {
  return (
    <div className="flex justify-end mb-4">
      <div className="flex flex-row items-center">
        <MovieForm
          title="Edit Movie"
          apiURL={UPDATE_MOVIE}
          className="mr-2"
          id={id}
          initialFormData={{
            name: movie ? movie.name : '',
            description: movie ? movie.description : '',
            releasedYear: movie ? movie.releasedYear : -1,
          }}
          refresh={refresh}
        />
        <Button danger>Remove Movie</Button>
      </div>
    </div>
  );
};

export default Header;
