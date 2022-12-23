import React from 'react';
import useBreakpoints from '~/hooks/useBreakpoints';

import { Container } from './styles';
import { Col } from '~/components';
import Item from '../Item';

function Content(props) {
  const breakpoints = useBreakpoints();

  const itemsByRow = breakpoints.xs ? 2 : 4;

  return (
    <Container {...props}>
      {
        props.movies.map((movie, index) => (
          <Col key={index} cols={3} xs={6}>
            <Item className={`mb-15 ${index % itemsByRow === 0 ? '' : 'ml-15'}`} movie={movie} />
          </Col>
        ))
      }
    </Container>
  );
}

export default Content;
