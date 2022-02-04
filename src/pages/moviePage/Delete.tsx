import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { DELETE_MOVIE } from '../../api';
import { toast } from 'react-toastify';

const Delete = ({
  id,
  name,
}: {
  id: string | undefined;
  name: string | undefined;
}): React.ReactElement => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = (): void => {
    setLoading(true);
    const formData = new FormData();
    if (id) formData.append('id', id);
    axios
      .post(DELETE_MOVIE, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        toast(res.data);
        setLoading(false);
        setVisible(false);
        navigate('/');
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <Button onClick={(): void => setVisible(true)} type="primary" danger>
        Remove Movie
      </Button>
      <Modal
        visible={isVisible}
        title="Remove Movie"
        onOk={handleSubmit}
        onCancel={(): void => setVisible(false)}
        footer={[
          <Button key="back" onClick={(): void => setVisible(false)}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handleSubmit}
            danger
          >
            Remove
          </Button>,
        ]}
      >
        <h1 className="font-serif text-2xl font-bold text-center">{name}</h1>
      </Modal>
    </>
  );
};

export default Delete;
