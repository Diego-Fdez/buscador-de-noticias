import { Container, Grid, Typography, TableFooter } from "@mui/material";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3'>
            Buscador de Noticias
          </Typography>
        </header>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />
      </Container>
      <Typography align="center" component="h5" variant="h5" sx={{fontSize: 5}}>
      ©Copyright Diego Fedez
      </Typography>
    </NoticiasProvider>
  );
}

export default App;
