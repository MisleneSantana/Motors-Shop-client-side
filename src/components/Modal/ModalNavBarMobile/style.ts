import styled from 'styled-components';

export const MenuMobileStyle = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100vw;
  height: max-content;
  padding: 1.75rem 0rem;
  top: 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.white};

  pointer-events: auto;
  transform: translateY(50px);

  transition: 0.5s;

  & .login-mobile__link {
    width: 90%;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey2};
  }

  & .register-mobile__link {
    width: 90%;
    padding: 12px 28px;
    border-radius: 4px;
    border: 1.5px solid ${({ theme }) => theme.colors.grey4};

    display: flex;
    justify-content: center;

    color: ${({ theme }) => theme.colors.grey0};
    font-weight: 600;
  }
`;
