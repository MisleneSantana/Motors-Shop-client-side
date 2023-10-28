import styled from 'styled-components';

export const DivModalStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  // position: absolute;
  position: fixed;
  inset: 0;

  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);

  & > form {
    position: relative;
    margin: 0 auto;
    top: 80px;
    width: 32.5rem;

    border-radius: 8px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);

    & > nav {
      & > button {
        position: absolute;
        right: 2.75rem;
        top: 2.75rem;

        width: 1.5rem;
        height: 1.5rem;
        color: ${({ theme }) => theme.colors.grey4};
        background: transparent;
        border: none !important;
      }
    }

    & > .button__add-gallery-image {
      border: 1.5px solid ${({ theme }) => theme.colors.brand4};
      background: ${({ theme }) => theme.colors.brand4};
      color: ${({ theme }) => theme.colors.brand1};
      font-size: 0.875rem;
      font-weight: 600;
    }

    & > .buttons__section {
      display: flex;
      gap: 1rem;
      width: 100%;
      justify-content: flex-end;
      margin-top: 1rem;

      & > .cancel__button,
      .delete__button {
        height: 3rem;
        padding: 12px 28px;
        border: 1.5px solid ${({ theme }) => theme.colors.grey6};
        background: ${({ theme }) => theme.colors.grey6};
        border-radius: 0.25rem;
        color: ${({ theme }) => theme.colors.grey2};
      }

      & > .delete__button {
        width: 50%;
      }

      & > .create-ad__button,
      .update-address__button {
        width: 12.0625rem;
        height: 3rem;
        border: 1.5px solid ${({ theme }) => theme.colors.brand3};
        background: ${({ theme }) => theme.colors.brand3};
        border-radius: 0.25rem;
        color: ${({ theme }) => theme.colors.brand4};
      }

      .create-ad__button:hover {
        border: 1.5px solid ${({ theme }) => theme.colors.brand1};
        background: ${({ theme }) => theme.colors.brand1};
        color: ${({ theme }) => theme.colors.white};
      }

      .update-address__button:hover {
        border: 1.5px solid ${({ theme }) => theme.colors.brand1};
        background: ${({ theme }) => theme.colors.brand1};
        border-radius: 0.25rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
