import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: black;

  & .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > a {
    position: absolute;
    top: -25px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ;
    background-color: ;
  }

  @media (max-width: 768px) {
    height: 310px;

    & .footer {
      flex-direction: column;
      gap: 60px;
    }
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const StyledFooterImage = styled.img`
  width: 180px;
  max-width: 100%;
  color: ;
`;

export const StyledFooterParagraph = styled.p`
  color: ;
`;

export const StyledFooterLink = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: ;
  background-color: ;
`;
