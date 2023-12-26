import { Favorite, RadioButtonCheckedOutlined, Search, ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Button, ButtonGroup, Container, Grid, IconButton, InputBase, Menu, MenuItem, Select, Stack, Typography, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#15161D',
    color: 'white',
    padding: 25,
    borderBottom: '2px solid red',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0 0 10px'
    },

  }));

  const StyledButton = styled(Button)({
    backgroundColor: "#D10024",
    color: 'white',
    padding: 10,
    width: 150,
    borderRadius: '18px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#D10024',
    },
  });

  const StyledSelect = styled(Select)(({ theme }) => ({
    backgroundColor: 'white',
    minWidth: 150,
    borderRadius: '18px 0 0 18px',
  }));



  return (

    <StyledBox>
      <Container disableGutters>
        <Grid container display='flex' alignItems='center' justifyContent='space-between'>
          <Grid item xs={6} md={3}>
            <Stack>
              <Typography variant='h1' fontWeight={600} sx={{ fontSize: { xs: '20px', sm: '38px' } }}>
                DV Electro
                <RadioButtonCheckedOutlined
                  color='error'
                  sx={{
                    position: 'absolute',
                    top: { xs: 65, sm: 100, md: 95 },
                    fontSize: '15px',
                  }}
                />
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={2} md={6}>
            <Stack sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton>
                <Search sx={{ color: "white" }} />
              </IconButton>
            </Stack>
            <Stack sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group" size='small' >
                <StyledSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  size='small'
                  value=""
                >
                  <MenuItem value="">
                    <em>All categories</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>


                <InputBase
                  placeholder='Search here'
                  fullWidth
                  sx={{
                    bgcolor: 'white',
                    px: 2,
                  }}
                  type='text'
                />


                <StyledButton>Search</StyledButton>
              </ButtonGroup>
            </Stack>
          </Grid>

          <Grid item xs={2} sx={{ display: { xs: 'flex', sm: 'none' } }} >
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Badge badgeContent={4} color="error" sx={{ px: 1 }}>
                <ShoppingCart color="white" />
              </Badge>
            </Box>
          </Grid>

          <Grid item xs={2} md={3} position='relative'>
            <Stack direction='row' sx={{ display: { xs: 'flex', sm: 'none' }, position: 'absolute', right: 0, bottom: -20 }} >
              <IconButton>
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
            </Stack>
            <Stack direction='row' spacing={5} display='flex' justifyContent='end' sx={{ display: { xs: 'none', sm: 'flex' } }} >
              <Box display='flex' flexDirection='column' alignItems='center' >
                <Badge badgeContent={4} color="error" sx={{ px: 1 }}>
                  <Favorite color="white" />
                </Badge>
                <Typography variant='span' fontSize={10} sx={{ textAlign: 'center' }}>Wishlist</Typography>
              </Box>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Badge badgeContent={4} color="error" sx={{ px: 1 }}>
                  <ShoppingCart color="white" />
                </Badge>
                <Typography variant='span' fontSize={12} sx={{ textAlign: 'center' }}>Cart</Typography>
              </Box>
            </Stack>
          </Grid>

        </Grid>

        <Grid container mt={2}>
          <Grid item sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
            <Stack>
              <ButtonGroup variant="contained" aria-label="outlined primary button group" size='small' >
                <StyledSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  size='small'
                  value=""
                >
                  <MenuItem value="">
                    <em>All categories</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>


                <InputBase
                  placeholder='Search here'
                  fullWidth
                  sx={{
                    bgcolor: 'white',
                    px: 2,
                  }}
                  type='text'
                />


                <StyledButton>Search</StyledButton>
              </ButtonGroup>
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </StyledBox >
  );
};

export default Header;
