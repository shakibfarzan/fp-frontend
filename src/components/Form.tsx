import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Typography } from 'antd';
import FormDataType from '../types/FormData';
import Error from '../types/Error';
import moment from 'moment';
import Uploader from './Uploader';
import axios from '../api/axios';
import { toast } from 'react-toastify';

const MovieForm = ({
  setSearchValue,
  setReleasedYear,
  title,
  initialFormData,
  id,
  apiURL,
  className,
  refresh,
}: {
  setSearchValue?: (value: string | undefined) => void;
  setReleasedYear?: (value: number | undefined) => void;
  title: string;
  initialFormData?: {
    name: string;
    description: string;
    releasedYear: number;
  };
  id?: string;
  apiURL: string;
  className?: string;
  refresh?: () => void;
}): React.ReactElement => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    description: '',
    releasedYear: undefined,
  });
  const [posterFile, setPosterFile] = useState<File>();
  const [errors, setErrors] = useState<Error>({
    name: '',
    description: '',
    releasedYear: '',
    poster: '',
  });

  useEffect(() => {
    if (initialFormData) setFormData(initialFormData);
  }, [initialFormData]);

  const handleSubmit = (): void => {
    const newErrors = {
      name: '',
      description: '',
      releasedYear: '',
      poster: '',
    };
    if (!posterFile && !refresh)
      newErrors.poster = 'Upload poster is required!';
    if (!formData.name) newErrors.name = 'Name is required!';
    if (!formData.description)
      newErrors.description = 'Description is required!';
    if (!formData.releasedYear)
      newErrors.releasedYear = 'Released Year is required!';

    setErrors(newErrors);

    if (formData.name && formData.description && formData.releasedYear) {
      const bodyFormData = new FormData();
      if (!refresh && !posterFile) return;
      if (!refresh && posterFile) {
        setLoading(true);
        bodyFormData.append('name', formData.name);
        bodyFormData.append('description', formData.description);
        bodyFormData.append('releasedYear', formData.releasedYear.toString());
        bodyFormData.append('poster', posterFile);
      } else if (id) {
        setLoading(true);
        bodyFormData.append('name', formData.name);
        bodyFormData.append('description', formData.description);
        bodyFormData.append('releasedYear', formData.releasedYear.toString());
        if (posterFile) bodyFormData.append('poster', posterFile);
        bodyFormData.append('id', id.toString());
      }
      axios
        .post(apiURL, bodyFormData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          toast(res.data);
          setLoading(false);
          setVisible(false);
          if (setSearchValue) setSearchValue('');
          if (setReleasedYear) setReleasedYear(undefined);
          if (refresh) refresh();
          setFormData({
            name: '',
            description: '',
            releasedYear: undefined,
          });
          setPosterFile(undefined);
        })
        .catch((res) => {
          toast.error(res.data);
        });
    }
  };

  const onCancel = (): void => {
    setVisible(false);
    if (!refresh) {
      setFormData({
        name: '',
        description: '',
        releasedYear: undefined,
      });
    }
    setPosterFile(undefined);

    setErrors({
      name: '',
      description: '',
      releasedYear: '',
      poster: '',
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e: any): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (!e.target.value) {
      setErrors({
        ...errors,
        [e.target.name]: `${e.target.name
          .charAt(0)
          .toUpperCase()
          .concat(e.target.name.slice(1))} is required!`,
      });
    } else {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  return (
    <>
      <Button
        type="primary"
        className={className}
        onClick={(): void => setVisible(true)}
      >
        {title}
      </Button>
      <Modal
        visible={isVisible}
        title={title}
        onOk={handleSubmit}
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={onCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handleSubmit}
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          className="w-full"
          name="form"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Input
            placeholder="Name*"
            value={formData?.name}
            onChange={onChange}
            name="name"
          />
          {errors?.name && (
            <Typography.Text type={'danger'}>{errors.name}</Typography.Text>
          )}
          <Input.TextArea
            placeholder="Description*"
            value={formData?.description}
            onChange={onChange}
            name="description"
            className="mt-1"
          />
          {errors?.description && (
            <Typography.Text type={'danger'}>
              {errors.description}
            </Typography.Text>
          )}
          <DatePicker
            picker={'year'}
            placeholder="Released Year*"
            className="w-full mt-1"
            name="releasedYear"
            value={
              formData?.releasedYear
                ? moment().set('year', formData.releasedYear)
                : undefined
            }
            onChange={(e): void => {
              setFormData({ ...formData, releasedYear: e?.get('year') });
              if (!e || !e.get('year')) {
                setErrors({
                  ...errors,
                  releasedYear: 'Released year is required!',
                });
              } else {
                setErrors({
                  ...errors,
                  releasedYear: '',
                });
              }
            }}
          />
          {errors?.releasedYear && (
            <Typography.Text type={'danger'}>
              {errors.releasedYear}
            </Typography.Text>
          )}
          <Uploader
            className="mt-1"
            setFile={setPosterFile}
            title={'Upload poster'}
            onChange={(): void => {
              if (posterFile) setErrors({ ...errors, poster: '' });
            }}
          />
          {errors.poster && (
            <Typography.Text type={'danger'}>{errors.poster}</Typography.Text>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default MovieForm;
