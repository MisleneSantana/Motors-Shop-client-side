import styled from 'styled-components';

export const StyleAnnouncementCard = styled.li`
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.brand4};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.025) 0px 0px 0px 0.5px;

  & > h4 {
    color: ${({ theme }) => theme.colors.grey1};
    font-family: Lexend;
  }

  & > p {
    color: ${({ theme }) => theme.colors.grey2};
    font-size: 0.875rem;
    line-height: 24px;
  }
`;

export const StyleImageAd = styled.div`
  width: 19.5rem;
  height: 9.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.grey7};

  & > a > img {
    width: 16.375rem;
    height: 9.3925rem;
    object-fit: contain;
  }

  & > img {
    width: 16.375rem;
    height: 9.3925rem;
    object-fit: contain;
  }
`;

export const StyleInfosAd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 1rem;

    & > p {
      padding: 4px 8px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.brand4};
      color: ${({ theme }) => theme.colors.brand1};
    }
  }

  & > p {
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const StyleAdButtons = styled.div`
  display: flex;
  gap: 1rem;

  & > button,
  a {
    display: flex;
    height: 38px;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    border-radius: 4px;
    border: 1.5px solid ${({ theme }) => theme.colors.grey1};
    color: ${({ theme }) => theme.colors.grey1};
  }

  & > .disabled__button {
    background: ${({ theme }) => theme.colors.grey6};
    border: 1.5px solid ${({ theme }) => theme.colors.grey6};
    color: ${({ theme }) => theme.colors.grey2};
    cursor: no-drop;
  }
`;

export const StyleUserNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 150px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.brand1};
  }

  & > p {
    color: ${({ theme }) => theme.colors.grey4};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;
