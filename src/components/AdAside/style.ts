import styled from 'styled-components';

export const AdAsideStyle = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50vw;
`;

export const BoxAdImages = styled.div`
  padding: 1.75rem 1.75rem;

  align-items: flex-start;
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  h3 {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey1};
  }
`;

export const BoxListGalleryImgs = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 108px);
  grid-template-rows: repeat(auto-fit, 108px);
  align-items: center;
  justify-content: start;
  gap: 1rem;
  margin-top: 2rem;
`;
