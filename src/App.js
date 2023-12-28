import { Box, Container, Grid, Stack, ThemeProvider } from "@mui/material";
import TopHeader from "./components/TopHeader/Index";
import Header from "./components/Header/Index";
import { theme } from "./theme";
import Sidebar from "./components/Sidebar/Index";
import Navbar from "./components/Navbar/Index";
import Home from "./components/Home/Index";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box position='relative'>
      <Box top={0} sx={{position: {xs: 'sticky', sm: 'static', md: 'static'} }} zIndex={1} bgcolor='yellow'>
        <TopHeader />
        <Header />
      </Box>
      <Navbar />
      <Container disableGutters={matches}  sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={3} md={3} sm={3} sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
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



  );
}

export default App;
