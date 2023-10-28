import styled from 'styled-components';

export const SectionStyle = styled.section`
  // border: 1px solid red;

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
    margin-top: 0.5rem;
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
`;

export const DivUserAvatarStyle = styled.div`
  height: 104px;
  width: 104px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.brand1};
  border: 1px solid ${({ theme }) => theme.colors.brand1};
  border-radius: 150px;
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
`;
