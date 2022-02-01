import React from 'react';
import { Card } from 'antd';

type Props = {
  id: number;
  className?: string | undefined;
  alt: string;
  poster: string;
  title: string;
  releasedYear: number;
};

const MovieCard = ({
  id,
  className,
  alt,
  poster,
  title,
  releasedYear,
}: Props): React.ReactElement => {
  const { Meta } = Card;
  return (
    <Card
      key={id}
      hoverable
      className={className}
      cover={<img alt={alt} src={poster} className="w-full h-full max-h-545" />}
    >
      <Meta
        title={<p className="text-lg font-bold truncate">{title}</p>}
        description={
          <p className="font-bold text-gray-500 text-md">
            <span className="font-normal text-gray-400 text-md">
              Released year:{' '}
            </span>
            {releasedYear}
          </p>
        }
      />
    </Card>
  );
};

export default MovieCard;
