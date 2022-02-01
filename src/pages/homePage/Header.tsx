import React from 'react';
import { Input, Button, Tooltip, InputNumber } from 'antd';
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';

const Header = (): React.ReactElement => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
          suffix={
            <Tooltip title="Search on movie name">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <InputNumber
          addonAfter="Released Year"
          min={1900}
          max={new Date().getFullYear()}
          className="w-36"
        />
      </div>

      <Button className="justify-end">Add Movie</Button>
    </div>
  );
};

export default Header;
