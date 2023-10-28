import styled from 'styled-components';

export const SectionProductDetailsStyle = styled.section`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50vw;
`;

export const ProductCoverImgStyle = styled.div`
  border: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  img {
    width: 18.75rem;
    height: 15.75rem;
    object-fit: contain;
  }
`;

export const BoxAdInfosStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem 1.75rem;
  border-radius: 4px;
  border: 1px solid red;

  > h4 {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey1};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0rem;

    & > div {
      display: flex;
      gap: 1rem;

      > p {
        padding: 4px 8px;
        border-radius: 4px;
        background: ${({ theme }) => theme.colors.brand4};
        color: ${({ theme }) => theme.colors.brand1};
      }
    }

    > p {
      color: ${({ theme }) => theme.colors.grey1};
      font-weight: 500;
    }
  }

  & > button {
    display: flex;
    align-items: center;

    height: 2.375rem;
    width: max-content;
    padding: 0.75rem 1.25rem;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.brand1};
    border: 1.5px solid ${({ theme }) => theme.colors.brand1};
    border-radius: 4px;
  }
`;

export const ProductDescriptionStyle = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 1.5rem;

  padding: 1.75rem 1.75rem;

  h3 {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey1};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grey2};
  }
`;
