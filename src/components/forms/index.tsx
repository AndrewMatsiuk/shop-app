import { Form as AntdForm, Input, Button, FormInstance } from 'antd';
import { Product } from '../../types/product';

type Props = {
  form: FormInstance<Product>;
  onFinish: (value: Product) => void;
  product?: Product;
};

export const Form: React.FC<Props> = ({ form, onFinish, product }) => {
  return (
    <AntdForm form={form} layout='vertical' onFinish={onFinish}>
      <AntdForm.Item label='Name' name='name'>
        <Input defaultValue={product?.name} />
      </AntdForm.Item>

      <AntdForm.Item label='Count' name='count'>
        <Input type='number' defaultValue={product?.count} />
      </AntdForm.Item>

      <AntdForm.Item label='Size'>
        <AntdForm.Item label='Width' name={['size', 'width']}>
          <Input type='number' defaultValue={product?.size.width} />
        </AntdForm.Item>
        <AntdForm.Item label='Height' name={['size', 'height']}>
          <Input type='number' defaultValue={product?.size.height} />
        </AntdForm.Item>
      </AntdForm.Item>

      <AntdForm.Item label='Weight' name='weight'>
        <Input type='number' defaultValue={product?.weight} />
      </AntdForm.Item>

      <AntdForm.Item>
        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          Submit
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};
