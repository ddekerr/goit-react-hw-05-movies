import { Header, Nav, List, ListItem, ListLink } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        <List>
          {navItems.map(({ href, text }) => (
            <ListItem key={href}>
              <ListLink to={href}>{text}</ListLink>
            </ListItem>
          ))}{' '}
        </List>
      </Nav>
    </Header>
  );
};
