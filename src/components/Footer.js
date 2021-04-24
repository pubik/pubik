import React from 'react';
import styled from 'styled-components';
import { StyledList } from '../components/NavItems';
import { CopyrightOutlined } from '@ant-design/icons';


const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0.7);

  ul {
    display: flex;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <StyledList>
          <li>
            <a href="https://www.freeprivacypolicy.com/live/a81f9855-b202-4723-ac3d-5bb89cd4f533" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </li>
            <li>
                <CopyrightOutlined /> Pubik
          </li>
        </StyledList>
      </StyledFooter>
    );
  }
};

export default Footer;
