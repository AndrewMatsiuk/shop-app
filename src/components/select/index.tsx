import React from 'react';
import { Select, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { productActions } from '../../redux/product/reducer';
import { SortOptions } from '../../redux/states';

export const SortSelect: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: string) => {
    dispatch(productActions.setSortOption(value as SortOptions));
  };

  return (
    <Space wrap>
      <Select
        defaultValue='default'
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'default', label: 'Default' },
          { value: 'weight', label: 'Weight' },
          { value: 'width', label: 'Width' },
          { value: 'height', label: 'Height' },
        ]}
      />
    </Space>
  );
};
