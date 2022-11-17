import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;

  color: #fff;
  background-color: #00b358;
  /* background-color: #3f51b5; */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 1100;
`;
export const Nav = styled.nav``;
export const List = styled.ul`
  display: flex;
  gap: 10px;
`;
export const ListItem = styled.li``;
export const ListLink = styled(NavLink)`
  position: relative;
  padding: 10px;

  color: #fff;
  text-decoration: none;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;

    background-color: #fff;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  :hover::after,
  :focus::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;
