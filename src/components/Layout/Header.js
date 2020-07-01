import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../static/image/logo/logo.png'

// S&P, NASDAQ, DOWJONES
const urls = [
  {idx: 0, url: '', name: '홈'},
  {idx: 1, url: 'DJIA', name: '다우존스'},
  {idx: 2, url: 'NASDAQCOM', name: '나스닥'},
  {idx: 3, url: 'SP500', name: 'S&P500'}
];

const HeaderContainer = styled.div`
  flex: 1;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const Logo = styled(Link)`
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin: 1rem;

  &:active {
    color: #495057;
  }
`;

const Img = styled.img`
  width: 80%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo to="/"><Img src={logo}/></Logo>
      <LinkContainer>
        {urls.map(({idx, url, name}, i) => (
          <StyledLink
            key={idx}
            // active={category === name}
            to={name === '/' ? '/' : `/${url}`}>{name}</StyledLink>
        ))}
      </LinkContainer>
    </HeaderContainer>
  );
}
