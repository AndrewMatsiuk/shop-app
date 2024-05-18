import React, { useEffect, useMemo } from 'react';
import { Row, Col } from 'antd';
import { ProductItem } from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { productActions } from '../../redux/product/reducer';

export const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );
  const sortOptions = useSelector(
    (state: RootState) => state.productReducer.sortOption
  );

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortOptions === 'default') {
        const nameComparison = a.name.localeCompare(b.name);
        if (nameComparison !== 0) {
          return nameComparison;
        }
        return a.count - b.count;
      }
      if (sortOptions === 'width' || sortOptions === 'height') {
        return a.size[sortOptions] - b.size[sortOptions];
      } else {
        return a.weight.length - b.weight.length;
      }
    });
  }, [products, sortOptions]);

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);

  return (
    <>
      <Row gutter={[16, 24]}>
        {sortedProducts.map((product) => (
          <Col span={4} key={product.id}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
