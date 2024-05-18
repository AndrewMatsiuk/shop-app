import React, { useState } from 'react';
import { Card } from 'antd';
import { Product } from '../../types/product';
import { EditItemModal } from '../modal/EditItemModal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { productActions } from '../../redux/product/reducer';

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { name, imageUrl, count, size, weight } = product;

  const handleSubmit = (value: Product) => {
    dispatch(
      productActions.editProduct({
        product: {
          ...value,
          id: product.id,
          imageUrl: product.imageUrl,
          comments: product.comments,
        },
      })
    );
  };

  const handleDelete = () => {
    dispatch(productActions.deleteProduct({ product }));
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Card
        onClick={openEditModal}
        hoverable
        cover={<img alt='photo' src={`${imageUrl}`} style={{ height: 300 }} />}
      >
        <div
          style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: 16 }}
        >
          {name}
        </div>
        <div>Count : {count}</div>
        <div>Weight : {weight}</div>
        <div>Width : {size.width}</div>
        <div>Height: {size.height}</div>
      </Card>
      {isEditModalOpen && (
        <EditItemModal
          product={product}
          visible={isEditModalOpen}
          onClose={closeEditModal}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};
