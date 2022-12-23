import React from "react";
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import { Container } from './styles';

function OrderControlsItem({
  search,
  sort,
  children,
  onClick,
  ...props
}) {
  const isActive = sort === search.sort;

  return (
    <Container {...props} onClick={() => onClick(sort)}>
      {
        isActive && (search.order === 'asc' ?
          <UpOutlined className="mr-5" />
        :
          <DownOutlined className="mr-5" />)
      }
      {children}
    </Container>
  );
}

export default OrderControlsItem;
