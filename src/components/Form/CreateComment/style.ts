import styled from 'styled-components';

export const DivFormStyle = styled.div`
  border: 1px solid red;
  padding: 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;

  & > form {
    padding: 0;

    & > textarea {
      height: 7rem;
    }

    & > button {
      height: 2.375rem;
      padding: 0.75rem 1.25rem;
      width: max-content;
      align-self: flex-end;

      display: flex;
      align-items: center;
    }
  }
`;

export const BoxUserInfosStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 150px;
    background-color: ${({ theme }) => theme.colors.random4};
    color: ${({ theme }) => theme.colors.white};
}
  }
`;

export const BoxReactionsStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    padding: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.grey3};

    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
`;
