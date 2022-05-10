import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header() {

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#F9F7F0' }}>
        <Link color="#072A40" noWrap variant="body2"sx={{ p: 1, flexShrink: 0 }} href="/">HOME</Link>
        <Typography
          component="h2"
          variant="h5"
          color="#072A40"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Desafio React Framework
        </Typography>
      </Toolbar>
      <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', backgroundColor: '#178ca4', overflowX: 'auto' }}>
        <Link color="#F9F7F0" noWrap key="albums" variant="body2" href="/albums" sx={{ p: 1, flexShrink: 0 }}>ALBUNS</Link>
        <Link color="#F9F7F0" noWrap key="posts" variant="body2" href="/posts" sx={{ p: 1, flexShrink: 0 }}>POSTAGENS</Link>
        <Link color="#F9F7F0" noWrap key="todos" variant="body2" href="/todos" sx={{ p: 1, flexShrink: 0 }}>TO-DOs</Link>
      </Toolbar>
    </>
  );
}

export default Header;