import styled from 'styled-components';

export const TextareaStyle = styled.textarea`
  box-sizing: border-box;
  height: 5rem;
  width: 100%;
  padding: 0.75rem 1rem;

  resize: none;
  word-break: break-all;
  // word-wrap: break-word;
  white-space: normal;
  line-height: 1.25rem;

  border-radius: 0.25rem;
  border: 1.5px solid ${({ theme }) => theme.colors.grey7};

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey3};
    padding-top: 0.75rem;
    font-weight: 400;
    font-size: 1rem;
    font-family: Inter;
  }

  :focus {
    border: 1.5px solid ${({ theme }) => theme.colors.brand2};
  }
`;
