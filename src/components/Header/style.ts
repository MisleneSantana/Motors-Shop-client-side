import styled from 'styled-components';

export const HeaderStyle = styled.header`
z-index: 1;
width: 100%;
height: 80px;
margin-left: auto;
margin-right: auto;
display: flex;
position: fixed;
align-items: center;
justify-content: space-between;
padding: 0 1rem;
background-color: ${({ theme }) => theme.colors.grey10};
border-bottom: 2px solid ${({ theme }) => theme.colors.grey10};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    position: relative;

    & > img {
      cursor: pointer;
      max-width: 100%;
      width: 160px;
    }
  }

  & > nav {
    width: 313px;
    height: 100%;
    gap: 44px;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: ${({ theme }) => theme.colors.grey10};
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ButtonStyle = styled.button`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  border: 0.1rem solid transparent;
  background-color: transparent;
  cursor: pointer;
  font-size: 21px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.random4};
    color: ${({ theme }) => theme.colors.white};
  }
`;
