import styled from 'styled-components';

export const CommentsBoxStyle = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.75rem 1.75rem;

  & > h2 {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;

    margin-bottom: 1rem;
  }

  & > ul {
    border: 1px solid red;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
