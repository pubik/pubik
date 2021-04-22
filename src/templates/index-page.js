import React from 'react';
import { graphql } from 'gatsby';

import test1 from '../img/4.jpg';
import test2 from '../img/2.jpg';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Animation from '../components/Animation';
import LogoPlusText from '../components/LogoPlusText';
import Countdown from '../components/Countdown';
import { mediaSizes } from '../style/utils';

const StyledSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;

  h1 {
    font-size: 4.5rem;
  }

  a {
    font-size: 2rem;
  }

  &#home {
    background: url(${test1}) no-repeat center center/cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
  }

  &#about {
    background: url(${test2}) no-repeat center center/cover;
    box-shadow: inset 0 0 0 2000px rgba(207, 142, 77, 0.3);
  }
  
  &#demo {
    background: rgba(207, 142, 77, 0.3);
    box-shadow: inset 0 0 0 2000px rgba(207, 142, 77, 0.3);
  }
`;

export const SmallScreenContent = styled.div`
  display: none;
  ${mediaSizes.lessThan('md')`
    display: block;
    margin-bottom: 7rem;
  `}
`;

export const IndexPageTemplate = ({ title, description }) => (
  <>
    <StyledSection id="home">
      <Animation />
      <SmallScreenContent>
        <LogoPlusText />
      </SmallScreenContent>
      <SmallScreenContent>
        <Countdown />
      </SmallScreenContent>
    </StyledSection>
    <StyledSection id="about">
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledSection >
    <StyledSection id="demo">
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledSection>
  </>
);

const IndexPage = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        title={pageContext.langSpecificData.title}
        description={pageContext.langSpecificData.description}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
