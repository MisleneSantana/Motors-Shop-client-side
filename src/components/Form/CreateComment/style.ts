import styled from 'styled-components';

export const DivFormStyle = styled.div`
  padding: 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;

  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  & > form {
    padding: 0;
    margin-bottom: 0rem;
    margin-top: 1rem;

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

  p {
    color: rgba(73, 80, 87, 1);
    font-family: Lexend;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 400;
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
  gap: 1rem;

  & > span {
    padding: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.grey3};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.5rem;

    @media (max-width: 768px) {
      padding: 0.25rem;
      border-radius: 2rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
