import React from 'react';
import { Modal, Form as AntdFrom } from 'antd';
import { Form } from '../forms';
import { Product } from '../../types/product';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (value: Product) => void;
};

export const CreateItemModal: React.FC<Props> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [form] = AntdFrom.useForm();

  const onFinish = (value: Product) => {
    onSubmit(value);
    reset();
  };

  const reset = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={visible}
      title='Create Product'
      footer={null}
      onCancel={onClose}
    >
      <Form form={form} onFinish={onFinish} />
    </Modal>
  );
};
