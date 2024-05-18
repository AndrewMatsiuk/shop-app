import React, { useState } from 'react';
import { ProductList } from '../../components/product';
import { Layout, Button } from 'antd';
import { CreateItemModal } from '../../components/modal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { productActions } from '../../redux/product/reducer';
import { Product } from '../../types/product';
import { SortSelect } from '../../components/select';

const { Content, Header } = Layout;
export const HomePage: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (value: Product) => {
    dispatch(
      productActions.createProduct({
        product: {
          ...value,
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
          comments: [],
        },
      })
    );
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <div>
      <Layout>
        <Header
          style={{
            height: '10vh',
            backgroundColor: '#221f1f',
            alignContent: 'center',
          }}
        >
          <Button
            type='primary'
            htmlType='submit'
            onClick={openCreateModal}
            style={{ marginRight: '2%' }}
          >
            Create Product
          </Button>
          <SortSelect />
        </Header>
        <Content
          style={{ padding: '48px', height: '100%', backgroundColor: 'white' }}
        >
          <ProductList />
        </Content>
      </Layout>
      {isCreateModalOpen && (
        <CreateItemModal
          visible={isCreateModalOpen}
          onClose={closeCreateModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
