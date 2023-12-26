import { Box, Grid, Stack, ThemeProvider } from "@mui/material";
import TopHeader from "./components/TopHeader/Index";
import Header from "./components/Header/Index";
import { theme } from "./theme";
import Sidebar from "./components/Sidebar/Index";
import Navbar from "./components/Navbar/Index";


function App() {

  return (

    <Box>
      <TopHeader />
      <Header />
      <Navbar />
      <Stack direction='row'>
        <Grid container >
          <Grid item xs={6} md={2}>
            {/* <Sidebar /> */}
          </Grid>
          <Grid item xs={6} ms={8}>
           
          </Grid>
        </Grid>
      </Stack>
    </Box>



  );
}

export default App;
