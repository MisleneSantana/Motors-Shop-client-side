import styled from 'styled-components';

export const RadioButtonDivStyles = styled.div`
display: flex;
width: 100%;
gap: 1rem;
height: 3rem;

    [type='radio'] {
      all: unset;
      position: absolute;
    }

    & > label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      cursor: pointer;

      font-weight: 600;
      color: ${({ theme }) => theme.colors.grey0};

      border: 1.5px solid ${({ theme }) => theme.colors.grey4};
      border-radius: 4px;
    }

    [type='radio']:checked + label {
      transition: 0.4s;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.brand1};
      border: 1.5px solid ${({ theme }) => theme.colors.brand1};
    }
  }
`;
