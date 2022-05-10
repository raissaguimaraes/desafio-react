import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: '#072A40', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" color="#F9F7F0" gutterBottom>
          Criado por
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#F9F7F0"
          component="p"
        >
        <Link color="#F9F7F0" href="https://github.com/raissaguimaraes/desafio-react">
            By Raissa Guimarães
        </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;