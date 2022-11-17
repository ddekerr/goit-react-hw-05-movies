import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieListContainer = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const MovieItem = styled.li`
  :not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const MovieLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #466fd5;
  transform: translate(0);
  transition: color 500ms ease-in-out, transform 500ms ease-in-out;

  :hover,
  :focus {
    color: #06246f;
    transform: translate(5px);
  }
`;
