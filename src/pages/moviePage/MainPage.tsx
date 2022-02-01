import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../fakeData/fakedata';

const MainPage = (): React.ReactElement => {
  const { id } = useParams();
  return <div>{getMovie(parseInt(id ? id : '-1'))?.name}</div>;
};

export default MainPage;
