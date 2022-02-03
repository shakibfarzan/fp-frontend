import React from 'react';
import { Input, Button, Tooltip, DatePicker } from 'antd';
import {
  AppstoreOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const Header = ({
  isTableView,
  setIsTableView,
  searchValue,
  setSearchValue,
  releasedYearValue,
  setReleasedYearValue,
}: {
  isTableView: boolean;
  setIsTableView: (isTableView: boolean) => void;
  searchValue: string | undefined;
  setSearchValue: (searchValue: string | undefined) => void;
  releasedYearValue: number | undefined;
  setReleasedYearValue: (releasedYearValue: number | undefined) => void;
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
          value={searchValue}
          onChange={(e): void => setSearchValue(e.target.value)}
        />
        <DatePicker
          picker={'year'}
          placeholder="Released Year"
          className="w-full"
          value={
            releasedYearValue
              ? moment().set('year', releasedYearValue)
              : undefined
          }
          onChange={(e): void => setReleasedYearValue(e?.get('year'))}
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
