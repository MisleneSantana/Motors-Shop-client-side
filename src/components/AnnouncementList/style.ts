import styled from 'styled-components';

export const AnnouncementsBoxStyle = styled.div`
  width: 80%;
  margin-top: 10rem;

  & > h3 {
    font-family: Lexend;
    font-size: 1.5rem;
    font-weight: 600;

    @media (max-width: 500px) {
      font-size: 1.125rem;
    }
  }

  & > ul {
    margin: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, 19.5rem);
    grid-template-rows: repeat(auto-fit, 22.25rem);
    justify-content: center;
    justify-items: center;
    padding: 30px;
    gap: 1rem;

    @media (max-width: 500px) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      overflow-x: scroll;

      ::-webkit-scrollbar {
        width: 9px;
      }
      ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.grey7};
      }
      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.brand1};
        background: ${({ theme }) => theme.colors.brand1};
        border-radius: 20px;
      }
    }

    @media (max-width: 500px) {
      padding-left: 0;
      padding-right: 0;
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media (max-width: 500px) {
    width: 90%;
    padding: 0;
  }
`;
