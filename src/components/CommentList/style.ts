import styled from 'styled-components';

export const CommentsBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.75rem 1.75rem;
  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  & > h2 {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;

    margin-bottom: 1rem;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const NoCommentsBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.75rem 1.75rem;
  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  p {
    color: ${({ theme }) => theme.colors.grey2};
    font-family: Lexend;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;
