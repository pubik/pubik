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
import Video from '../components/Video.jsx';

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
  box-sizing: border-box;
  padding: 1rem;

  a {
    font-size: 2rem;
  }

  &#home {
    background: url(${test1}) no-repeat center center/cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
  }

  &#about {
    background: url(${test2}) no-repeat center center/cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  }

  &#demo {
    background: rgba(207, 142, 77, 0.3);
    box-shadow: inset 0 0 0 2000px rgba(207, 142, 77, 0.3);
    ${mediaSizes.lessThan('md')`
       padding: 80px 1rem 1rem;
    `}
    justify-content: unset;
    align-items: center;
    padding: 8rem;
  }

  &#about {
    justify-content: unset;
    align-items: center;
    padding: 8rem;
    ${mediaSizes.lessThan('md')`
       padding: 80px 1rem 1rem;
      `}
    h2 {
      text-align: center;
      font-size: 3rem;
      padding-bottom: 2rem;
      ${mediaSizes.lessThan('md')`
        font-size: 2rem;
        padding-bottom: 1rem;
      `}
    }
    p {
      text-align: left;
      font-size: 1.5rem;
      ${mediaSizes.lessThan('md')`
        font-size: 0.9rem;
      `}
      padding-bottom: 2rem;
    }
  }
  &#demo {
    justify-content: unset;
    align-items: center;
    padding: 8rem;
    ${mediaSizes.lessThan('md')`
       padding: 80px 1rem 1rem;
    `}
    h2 {
      text-align: center;
      font-size: 3rem;
      padding-bottom: 2rem;
      ${mediaSizes.lessThan('md')`
        font-size: 2rem;
        padding-bottom: 1rem;
      `}
    }
    p {
      text-align: left;
      font-size: 1.5rem;
      padding-bottom: 1rem;
      ${mediaSizes.lessThan('md')`

        font-size: 0.9rem;
      `}
    }
  }
`;

export const SmallScreenContent = styled.div`
  display: none;
  ${mediaSizes.lessThan('md')`
    display: block;
    padding: 4rem 0;
  `}
`;

export const SmallScreenLogoWrapper = styled.div`
  display: none;
  ${mediaSizes.lessThan('md')`
    display: block;
    padding-top: 2rem;
  `}
`;

export const IndexPageTemplate = ({
  homeTitle,
  aboutTitle,
  demoTitle,
  homeDescription,
  aboutDescription,
  demoDescription,
  homeBackground,
  aboutBackground,
  demoBackground,
  homeFontColor,
  aboutFontColor,
  demoFontColor,
  demoVideoUrl,
  releaseDate,
}) => {
  const Logo = () => (
    <LogoPlusText title={homeTitle} description={homeDescription} releaseDate={releaseDate} />
  );
  return (
    <>
      <StyledSection id="home">
        <Animation logo={Logo} releaseDate={releaseDate} />
        <SmallScreenLogoWrapper>
          <Logo />
        </SmallScreenLogoWrapper>
        <SmallScreenContent>
          <Countdown releaseDate={releaseDate} />
        </SmallScreenContent>
      </StyledSection>
      <StyledSection id="about">
        <h2>{aboutTitle}</h2>
        <p>{aboutDescription}</p>
      </StyledSection>
      <StyledSection id="demo">
        <h2>{demoTitle}</h2>
        <p>{demoDescription}</p>
        <Video videoURL={demoVideoUrl} />
      </StyledSection>
    </>
  );
};

const IndexPage = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        {...frontmatter.pl}
        {...pageContext.langSpecificData}
        {...frontmatter[pageContext.lang]}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark {
      frontmatter {
        pl {
          homeBackground {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          homeFontColor
          aboutBackground {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          aboutFontColor
          demoBackground {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          demoFontColor
          demoVideoUrl
          releaseDate
        }
        cs {
          demoVideoUrl
          releaseDate
        }
        en {
          demoVideoUrl
          releaseDate
        }
      }
    }
  }
`;
