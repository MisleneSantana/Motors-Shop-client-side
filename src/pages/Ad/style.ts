import styled from 'styled-components';

export const AdMainStyle = styled.main`
  width: 100vw;
  align-items: center;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.grey8};
`;

export const SectionStyle = styled.section`
  width: 70%;

  display: flex;
  gap: 1rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grey8};

  position: relative;
  top: -218px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 90%;
    flex-direction: column;
  }
`;
