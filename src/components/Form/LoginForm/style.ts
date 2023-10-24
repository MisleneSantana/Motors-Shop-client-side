import styled from 'styled-components';

export const DivResetPasswordStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & > a {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey3};
  }
`;

export const DivButtonRegisterStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > p {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey2};
  }

  & > a {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;

    font-size: 1rem;
    font-weight: 600;

    border-radius: 4px;
    color: ${({ theme }) => theme.colors.grey0};
    border: 1.5px solid ${({ theme }) => theme.colors.grey4};
  }
`;
