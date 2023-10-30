import styled from 'styled-components';

export const BoxAdUserCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1.75rem;
  gap: 2rem;

  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  & > span {
    width: 6.5rem;
    height: 6.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.white};
    font-size: 2.25rem;
    font-weight: 500;

    background: ${({ theme }) => theme.colors.brand1};
    border-radius: 150px;

    @media (max-width: 768px) {
      width: 5.25rem;
      height: 5.25rem;
    }
  }

  & > .username__p {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey1};
  }

  & > .user-description__p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: ${({ theme }) => theme.colors.grey2};
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.75rem 1.75rem;

    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    border: 1.5px solid ${({ theme }) => theme.colors.grey0};
    background: ${({ theme }) => theme.colors.grey0};
  }
`;
