import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header() {

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small" href="/">Home</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Desafio React Framework
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        <Link color="inherit" noWrap key="albums" variant="body2" href="/albums" sx={{ p: 1, flexShrink: 0 }}>ALBUNS</Link>
        <Link color="inherit" noWrap key="posts" variant="body2" href="/posts" sx={{ p: 1, flexShrink: 0 }}>POSTAGENS</Link>
        <Link color="inherit" noWrap key="todos" variant="body2" href="/albums" sx={{ p: 1, flexShrink: 0 }}>TO-DOs</Link>
      </Toolbar>
    </>
  );
}

export default Header;