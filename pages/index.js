import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Home(){
    return(
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '60vh'
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h1" component="h1"color="#18B7BE" gutterBottom>
         Bem Vindo!
        </Typography>
      </Container>
    </Box>
    )
}

export default Home;
