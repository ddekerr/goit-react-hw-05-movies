import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Main = styled.main``;

export const GoBackLink = styled(NavLink)`
  display: block;
  margin: 10px;
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 20px;

  border-bottom: 1px solid #000;
`;

export const ImageThumb = styled.div`
  min-width: 200px;
  width: 300px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Information = styled.div``;

export const Additional = styled.div`
  border-bottom: 1px solid #000;
`;

export const AdditionalList = styled.ul``;

export const AdditionalItem = styled.li``;

export const AdditionalLink = styled(NavLink)``;
