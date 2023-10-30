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
    max-height: 17.9375rem;

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

    & > nav {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;

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

    & > h3 {
      font-family: 'Lexend';
    }

    & > p {
      color: ${({ theme }) => theme.colors.grey2};
    }

    & > .modal__buttons {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      & > .cancel_button {
        height: 48px;
        padding: 12px 28px;
        border-radius: 4px;
        border: 1.5px solid ${({ theme }) => theme.colors.grey6};
        background: ${({ theme }) => theme.colors.grey6};
        color: ${({ theme }) => theme.colors.grey2};
        font-size: 600;
      }

      .delete_button {
        height: 48px;
        padding: 12px 28px;
        border-radius: 4px;
        border: 1.5px solid ${({ theme }) => theme.colors.feedbackAlert2};
        background: ${({ theme }) => theme.colors.feedbackAlert2};
        color: ${({ theme }) => theme.colors.feedbackAlert1};
        font-weight: 600;
        font-size: 0.875rem;

        @media (max-width: 500px) {
          display: inline-flex;
          align-items: center;
          font-size: 0.8125rem;
        }
      }
    }

    @media (max-width: 520px) {
      width: auto;
      display: inline-block;
    }
  }
`;
