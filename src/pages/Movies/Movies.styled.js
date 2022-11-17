import styled from '@emotion/styled';

export const MoviesContainer = styled.main`
  padding: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 10px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #eee;
  border-radius: 5px;

  font: inherit;
  font-size: 20px;
  outline: none;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border: 0;
  border-radius: 5px;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
