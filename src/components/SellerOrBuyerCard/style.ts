import styled from 'styled-components';

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: absolute;
  top: 155px;
  left: 20vw;

  width: 60vw;
  padding: 2rem 2rem;

  background-color: ${({ theme }) => theme.colors.grey10};
  border-radius: 4px;

  & > p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey2};
    line-height: 24px;
  }

  & > button {
    width: max-content;
    height: 3rem;
    padding: 0.75rem 1.75rem;
    margin-top: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1.5px solid ${({ theme }) => theme.colors.brand1};
    color: ${({ theme }) => theme.colors.brand1};
    border-radius: 4px;
  }

  @media (max-width: 500px) {
    left: 5vw;

    width: 90vw;
  }
`;

export const DivUserAvatarStyle = styled.div`
  height: 6.5rem;
  width: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.brand1};
  border: 1px solid ${({ theme }) => theme.colors.brand1};
  border-radius: 150px;

  @media (max-width: 768px) {
    width: 5.25rem;
    height: 5.25rem;
  }
`;

export const DivUsernameStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    font-size: 1.25rem;
    font-weight: 600;
  }

  & > span {
    width: max-content;
    height: 1.5rem;
    padding: 0.25rem 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.brand4};
    color: ${({ theme }) => theme.colors.brand1};
    border-radius: 4px;
  }

  @media (max-width: 400px) {
    align-items: flex-start;
    gap: 1rem;
    flex-direction: column;
  }
`;
