import React from 'react';
import useBreakpoints from '~/hooks/useBreakpoints';

import { Container } from './styles';
import { T1, Col, Inline } from '~/components';
import OrderControls from '../OrderControls';

function Header(props) {
  const breakpoints = useBreakpoints();

  return (
    <Container>
      <Col cols={12}>
        <Inline>
          <T1>Melhores filmes</T1>
        </Inline>
        <Inline
          right
          style={{
            flexDirection: breakpoints.xs ? 'column' : 'row',
            alignItems: breakpoints.xs ? 'flex-end' : 'center',
          }}
        >
          <OrderControls {...props} />
        </Inline>
      </Col>
    </Container>
  );
}

export default Header;
