import React from 'react';
import { graphql } from 'gatsby';

import test1 from '../img/4.jpg';
import test2 from '../img/2.jpg';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Animation from '../components/Animation';

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
    box-shadow:inset 0 0 0 2000px rgba(137, 107, 75, 0.1);
  }

  &#about {
    background: url(${test2}) no-repeat center center/cover;
    box-shadow:inset 0 0 0 2000px rgba(207, 142, 77, 0.3);
  }
`;

export const IndexPageTemplate = ({
  title,
  description,
}) => (
  <>
      <StyledSection id="home">
          <Animation />
      </StyledSection>
      <StyledSection id="about">
          <h1>{title}</h1>
          <p>{description}</p>
      </StyledSection>
  </>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
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
