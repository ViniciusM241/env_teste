import styled from "styled-components";

export const StyledItemInfo = styled.div`
  position: relative;
  width: 100%;
  height: 508px;

  background-image: url(${props => props.movie.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 5px;
  cursor: pointer;
  transition: all .2s ease;

  &::before {
    content: "";
    position: absolute;
    background-image: inherit;
    background-size: cover;
    background-position: center;
    filter: blur(200px);
    z-index: -1;
    width: 0%;
    height: 0%;
    transition: all .5s ease;
  }

  &:hover:before {
    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .25);
    /* transform: scale(1.01); */
  }
`;
