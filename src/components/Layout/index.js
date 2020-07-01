import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Responsive from '../../common/Responsive';

const Container = styled(Responsive)`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  height: 100%;
  flex: 9;
  overflow-y: scroll;
`;

function Layout({ children }) {
  return (
    <Container>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </Container>
  );
}

export default Layout;
