import styled from 'styled-components';

interface IFormStyleProps {
  width?: string;
  margin?: string;
  padding?: string;
}

export const FormStyle = styled.form<IFormStyleProps>`
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: max-content;
  padding: 2.75rem;
  background-color: ${({ theme }) => theme.colors.grey10};
  color: ${({ theme }) => theme.colors.grey0};
  border-radius: 4px;
  gap: 1rem;

  & > .title__form {
    color: ${({ theme }) => theme.colors.grey0};
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Lexend';
  }

  & > .form__h3 {
    color: ${({ theme }) => theme.colors.grey0};
    margin: 0.5rem 0;
  }

  & > .form__h4 {
    color: ${({ theme }) => theme.colors.grey0};
    margin: 0.625rem 0;
  }

  & > .content__textarea {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  & > .content__state-city,
  .content__number-complement,
  .content__year-fuel,
  .content__km-color,
  .content__table_price-price {
    display: flex;
    gap: 1rem;
  }

  & > button {
    margin: 1.25rem 0;
    border-radius: 0.25rem;
    width: 100%;
    height: 3rem;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.brand1};
    border: ${({ theme }) => theme.colors.brand1};
    color: ${({ theme }) => theme.colors.white};
  }

  & > .update-comment__button {
    width: 12.0625rem;
    height: 3rem;
    padding: 0.75rem 1.75rem;
    align-self: flex-end;

    background-color: ${({ theme }) => theme.colors.brand3};
    border: ${({ theme }) => theme.colors.brand3};
    color: ${({ theme }) => theme.colors.white};
  }

  & .update-comment__button:hover {
    background-color: ${({ theme }) => theme.colors.brand1};
    border: ${({ theme }) => theme.colors.brand1};
  }

  @media (max-width: 520px) {
    padding: 1.75rem 1rem;
  }
`;
