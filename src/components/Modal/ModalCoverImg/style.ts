import styled from 'styled-components';

export const DivModalStyle = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);

  & > div {
    width: 100%;
    max-width: 32.5rem;
    height: max-content;

    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    margin: 5rem auto 3rem auto;
    gap: 1rem;

    position: relative;
    animation: down 0.3s ease-in-out;

    color: ${({ theme }) => theme.colors.grey1};
    background: ${({ theme }) => theme.colors.grey10};
    border-radius: 8px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: 520px) {
      width: auto;
      margin: 5rem 0;
    }

    & > nav {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      background-color: transparent;

      > h3 {
        font-family: 'Lexend';
      }

      > button {
        width: 1.5rem;
        height: 1.5rem;
        color: ${({ theme }) => theme.colors.grey4};
        background: transparent;
        border: none !important;
      }
    }

    img {
      height: 11.25rem;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.grey7};
      object-fit: contain;
    }
  }
`;
