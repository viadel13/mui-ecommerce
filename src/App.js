import { AppBar, Box, Container, Grid, Stack, ThemeProvider, createTheme } from "@mui/material";
import TopHeader from "./components/TopHeader/Index";
import Header from "./components/Header/Index";
import Sidebar from "./components/Sidebar/Index";
import Navbar from "./components/Navbar/Index";
import Home from "./components/Home/Index";



function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xm: 400, // Ajout du breakpoint xm avec la valeur 400
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar sx={{position: {xs: 'sticky', sm: 'static'}}}>
          <TopHeader />
          <Header />
        </AppBar>
        <Navbar />

        <Container sx={{ display: { xs: 'initial', sm: 'block' }, mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item md={3} sm={3} sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} md={9} sm={9}>
              <Home />
              <Home />
              <Home />
            </Grid>
          </Grid>
        </Container>
      </Box>

    </ThemeProvider>


  );
}

export default App;
