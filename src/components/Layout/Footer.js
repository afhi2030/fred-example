import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 1px solid black;
`;



const CompanyName = styled.div`
  margin: 1rem 0;
  letter-spacing: 2px;
  font-weight: 700;
`;

const Info = styled.span`
`;


export default function Footer() {
  return (
    <FooterContainer>
      <CompanyName>Lee Index</CompanyName>
      <Info>&copy; Lee</Info>
      <Info>역삼동산다</Info>
    </FooterContainer>
  )
}
