import { Button } from 'antd';
import React from 'react';

const Header = (): React.ReactElement => {
  return (
    <div className="flex justify-end mb-4">
      <div className="flex flex-row items-center">
        <Button className="mr-2">Edit Movie</Button>
        <Button danger>Remove Movie</Button>
      </div>
    </div>
  );
};

export default Header;
