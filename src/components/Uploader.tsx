import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';

const Uploader = ({
  setFile,
  title,
  className,
}: {
  setFile: (file: File | undefined) => void;
  title: string;
  className?: string;
}): React.ReactElement => {
  return (
    <div className={className}>
      <Upload
        accept=".jpg,.png,.jpeg"
        listType="picture"
        maxCount={1}
        beforeUpload={(file: File): boolean => {
          setFile(file);
          return false;
        }}
        onRemove={(file: unknown): boolean => {
          setFile(undefined);
          return true;
        }}
      >
        <Button icon={<UploadOutlined />}>{title}</Button>
      </Upload>
    </div>
  );
};

export default Uploader;
