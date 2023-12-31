import styled from 'styled-components';

export const SectionProductDetailsStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50vw;

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ProductCoverImgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  img {
    width: 18.75rem;
    height: 15.75rem;
    object-fit: contain;
    padding: 1rem;
  }
`;

export const BoxAdInfosStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem 1.75rem;
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  > h4 {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
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

      @media (max-width: 768px) {
        font-size: 12px;
      }

      @media (max-width: 320px) {
        font-size: 12px;
      }
    }

    > p {
      color: ${({ theme }) => theme.colors.grey1};
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 320px) {
        font-size: 12px;
      }
    }
  }

  & > button {
    cursor: no-drop;
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
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 1.5rem;

  padding: 1.75rem 1.75rem;
  border: 1.5px solid ${({ theme }) => theme.colors.grey10};
  background: ${({ theme }) => theme.colors.grey10};

  h3 {
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.grey1};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grey2};
  }
`;
