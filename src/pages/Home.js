import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
`;

const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const Title = styled.h1``


const Text = styled.div`
  letter-spacing: 1px;
`;

const Strong = styled.span`
  font-weight: 800;
`;

export default function Home() {
  return (
    <Container>
      <SubjectContainer>
        <Title>미니프로젝트 1</Title>
        <Text>이번 시간은 외부라이브러리, API 사용법, SPA Routing, styled-components에 대해 배우는 시간입니다.
          Fred에서 제공하는 API를 가지고 데이터를 전송받아, 그래프를 보여주는 페이지를 완성해주세요.</Text>
        <br />
        <Strong>사용할 패키지</Strong>
        <br />
        <Text>- React: 리액트 패키지입니다.</Text>
        <Text>- React Router Dom: 라우팅(페이지 이동)을 도와주는 패키지입니다.</Text>
        <Text>- Recharts: 자바스크립트 시각화 패키지입니다.</Text>
        <Text>- Axios: HTTP통신 라이브러리로, API 데이터를 받아오는 것을 돕습니다</Text>
        <Text>- Styeld-Components: 리액트용 디자인 패키지입니다.</Text>
        <br />
        <Strong>Fred API</Strong>
        <br />
        <Text><a href="https://fred.stlouisfed.org/" target="_blank" rel="noopener noreferrer">Fred(세인트루이스 연준)</a>에서 제공하는 경제 데이터 사이트입니다. 사이트에 접속해서 API 사용법을 찾아보세요.
        Fred API는 Fred에서 지정한 '코드네임'을 통해 데이터를 받아올 수 있습니다. 다우존스지수(DJIA), 나스닥(NASDAQCOM), S&P500(SP500) 데이터를 받아서 과제를 완성해주세요.</Text>
        <br />
      </SubjectContainer>
    </Container>
  );
}
