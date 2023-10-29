import styled from 'styled-components';

export const CommentCardStyle = styled.li`
  // border: 1px solid red;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .comment__p {
    color: ${({ theme }) => theme.colors.grey2};
    font-size: 0.875rem;
    line-height: 24px;
  }
`;

export const CommentOwnerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 150px;
    background-color: ${({ theme }) => theme.colors.random4};

    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.grey1};
    font-size: 0.875rem;
    font-weight: 500;
  }

  div {
    color: ${({ theme }) => theme.colors.grey4};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  .created-comment__p {
    color: ${({ theme }) => theme.colors.grey3};
  }
`;

export const BoxButtonsStyle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  button {
    display: flex;
    height: 38px;
    padding: 0.75rem 1.75rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.white};
    border: 1.5px solid rgba(33, 37, 41, 1);
    color: rgba(33, 37, 41, 1);
  }

  .delete-comment__button {
    border-radius: 4px;
    border: 1.5px solid ${({ theme }) => theme.colors.feedbackAlert2};
    background: ${({ theme }) => theme.colors.feedbackAlert2};
    color: ${({ theme }) => theme.colors.feedbackAlert1};
  }
`;
