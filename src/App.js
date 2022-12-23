import React, { Suspense } from 'react';
import GlobalStyle from './GlobalStyle';

import Home from './Views/Home';

import {
  Container,
  SuspenseLoading,
  FloatingLink,
} from './components';

function App() {
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
      <FloatingLink />
    </Suspense>
  );
}

export default App;
