import React from "react";
import {
  Container,
  StyledTitle,
  StyledInfo,
} from './styles';

function ItemInfo({
  movie,
}) {
  return (
    <Container>
      <StyledInfo underline>{movie.year}</StyledInfo>
      <StyledTitle>{movie.title}</StyledTitle>
      <StyledInfo>{movie.director}</StyledInfo>
      <StyledInfo>{movie.country}</StyledInfo>
    </Container>
  );
}

export default ItemInfo;
