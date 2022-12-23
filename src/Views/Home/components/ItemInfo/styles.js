import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(360deg, #0F0F0F 36.46%, rgba(15, 15, 15, 0.26) 77.08%, rgba(0, 0, 0, 0) 100%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const StyledTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;

  padding: 0 5px;
`;

export const StyledInfo = styled.p`
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  font-size: .8rem;
  font-weight: 200;
  text-align: center;
  line-height: 15px;
`;
