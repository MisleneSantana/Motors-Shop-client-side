import styled from 'styled-components';
import { AnimationFadeIn } from '../../../styles/animation';

export const ModalNavBarStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  top: 5.75rem;
  left: 0;
  align-items: flex-end;

  position: fixed;
  z-index: 999;

  background: rgba(51, 51, 51, 0.5);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    width: 12.5rem;

    animation: ${AnimationFadeIn} 1s ease 0s 1 alternate backwards;

    padding: 1.5rem 1rem 1.5rem 2rem;
    background: ${({ theme }) => theme.colors.grey9};
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    & > button {
      font_size: 1rem;
      font-weight: 400;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.grey2};
      background-color: transparent;
    }
  }
`;
