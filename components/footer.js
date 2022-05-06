import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Criado por
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        <Link color="inherit" href="https://github.com/raissaguimaraes/desafio-react">
            By Raissa Guimarães
        </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;