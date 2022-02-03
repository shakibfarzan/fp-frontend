import React from 'react';
import Movie from '../../types/Movie';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { POSTER_URL } from '../../api';

type Props = {
  movies: Array<Movie> | undefined;
};

const MovieTable = ({ movies }: Props): React.ReactElement => {
  return (
    <Table
      dataSource={movies}
      columns={[
        {
          title: '',
          dataIndex: 'poster',
          key: 'poster',
          render: function posterRenderer(
            poster: string,
            record: Movie,
          ): React.ReactNode {
            return (
              <img
                className="w-20 h-auto"
                alt={record.name}
                src={`${POSTER_URL}/${poster}`}
              />
            );
          },
          width: '80px',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: function nameRenderer(
            name: string,
            record: Movie,
          ): React.ReactNode {
            return (
              <Link
                to={`movies/${record.id}`}
                className="font-bold text-gray-800"
              >
                {name}
              </Link>
            );
          },
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: 'Released Year',
          dataIndex: 'releasedYear',
          key: 'releasedYear',
          sorter: (a, b) => a.releasedYear - b.releasedYear,
        },
      ]}
      pagination={false}
    />
  );
};

export default MovieTable;
