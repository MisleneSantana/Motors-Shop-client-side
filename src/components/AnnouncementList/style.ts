import styled from 'styled-components';

export const AnnouncementsBoxStyle = styled.div`
  border: 1px solid red;
  // width: 80%;

  width: 70%;
  padding:1rem;

  margin-top: 10rem;

  & > h3{
    font-family: Lexend;
    font-size: 24px;
    font-weight: 600;
  }

  & > ul {
    border: 1px solid red;
    margin: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit,19.5rem );
    grid-template-rows: repeat(auto-fit,22.25rem );
    justify-content: center;
    justify-items: center;
    padding: 30px;
    gap: 1rem;

`;
