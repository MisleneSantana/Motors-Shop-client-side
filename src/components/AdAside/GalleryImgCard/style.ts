import styled from 'styled-components';

export const CardGalleryImgStyle = styled.li`
  width: 6.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6875rem 0.4375rem;
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.colors.grey7};
  background: ${({ theme }) => theme.colors.grey7};

  img {
    width: 5.9375rem;
    height: 3.4375rem;
    object-fit: contain;
  }
`;
