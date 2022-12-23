import React from "react";

import ItemInfo from '../ItemInfo';
import {
  StyledItemInfo,
} from './styles';

function Item({
  movie,
  ...props
}) {
  return (
    <StyledItemInfo {...props} movie={movie}>
      <ItemInfo movie={movie} />
    </StyledItemInfo>
  );
}

export default Item;
