import React from 'react';
import { Input, Button, Tooltip, DatePicker } from 'antd';
import {
  AppstoreOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const Header = ({
  isTableView,
  setIsTableView,
}: {
  isTableView: boolean;
  setIsTableView: (isTableView: boolean) => void;
}): React.ReactElement => {
  return (
    <div className="flex flex-col justify-between mb-4 sm:flex-row">
      <div className="flex flex-row mb-2 sm:mb-0">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
          suffix={
            <Tooltip title="Search on movie name">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          className="mr-2"
        />
        <DatePicker
          picker={'year'}
          placeholder="Released Year"
          className="w-full"
        />
      </div>
      <div className="flex flex-row items-center justify-end">
        <Button
          type={'primary'}
          size={'small'}
          className="mr-2"
          icon={isTableView ? <AppstoreOutlined /> : <UnorderedListOutlined />}
          onClick={(): void => setIsTableView(!isTableView)}
        />
        <Button>Add Movie</Button>
      </div>
    </div>
  );
};

export default Header;
