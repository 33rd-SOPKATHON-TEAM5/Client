import React from 'react';
import styled from 'styled-components';

import Header from '../../components/stories/Header';
import SmallDiv from '../../components/stories/SmallDiv';
import MediumDiv from '../../components/stories/MediumDiv';
import LargeDiv from '../../components/stories/LargeDiv';
import Footer from '../../components/stories/Footer';

const Stories = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Header />
        <ResultDiv>
          <ResultContainer>
          <SmallDiv />
          <MediumDiv />
          <LargeDiv />
          <SmallDiv />
          <MediumDiv />
          <LargeDiv />
          <SmallDiv />
          <MediumDiv />
          <LargeDiv />
          <SmallDiv />
          <MediumDiv />
          <LargeDiv />
          <SmallDiv />
          <MediumDiv />
          <LargeDiv />
          <SmallDiv />
          <MediumDiv />
          <LargeDiv />
          </ResultContainer>
        </ResultDiv>
        <Footer />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Stories;

// padding 수정
const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultDiv = styled.main`


  overflow: hidden;
  overflow-y: scroll;

  width: 100%;
  height: calc(100vh - 18rem);
  padding: 3rem 1.6rem;

  background-color: red;
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`