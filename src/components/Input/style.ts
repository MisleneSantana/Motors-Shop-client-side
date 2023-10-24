import styled from 'styled-components';

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  margin: 0.5rem 0;

  & > label {
    color: ${({ theme }) => theme.colors.grey1};
    font-size: 0.875rem;
    font-weight: 500;
  }

  & > input {
    width: 100%;
    padding: 0.75rem 1rem;
    gap: 0.625rem;

    border: 1.5px solid ${({ theme }) => theme.colors.grey7};
    border-radius: 4px;

    :focus {
      border: 1.5px solid ${({ theme }) => theme.colors.brand2};
    }

    ::placeholder {
      ${({ theme }) => theme.input_placeholder_16}
      color: ${({ theme }) => theme.colors.grey3};
    }

    :read-only {
      opacity: 50%;
    }
  }

  p {
    padding: 4px;
    color: ${({ theme }) => theme.colors.grey1};
    border: 0.5px solid ${({ theme }) => theme.colors.feedbackAlert1};
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
