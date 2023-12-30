import { Favorite, PermIdentity, RadioButtonCheckedOutlined, Search, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, ButtonGroup, Container, Grid, IconButton, InputBase, Menu, MenuItem, Select, Stack, Toolbar, Typography, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#15161D',
    color: 'white',
    padding: '25px 0',
    borderBottom: '2px solid red',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 0'
    },

    [theme.breakpoints.down('md')]: {
      padding: '5px 0'
    },


  }));

  const StyledButtonEcran = styled(Button)({
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
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#D10024",
    color: 'white',
    width: 90,
    borderRadius: '15px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#D10024',
    },
    [theme.breakpoints.up('sm')]: {
      padding: 8,
    }

  }));

  const StyledSelect = styled(Select)(({ theme }) => ({
    backgroundColor: 'white',
    minWidth: 150,
    borderRadius: '18px 0 0 18px',
  }));

  const StyledContained = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('xm')]: {
      maxWidth: theme.breakpoints.values.lg,
    },

  }));

  const BoxContainer = styled(Container)(({ theme }) => ({
    width: '100%',

  }));


  return (
    <>
      <StyledBox>
        <StyledContained disableGutters sx={{ maxWidth: { xs: 'xs', sm: 'md', md: 'xl', lg: 'lg', xl: 'xs' } }}>
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0, display: { xs: 'flex', sm: "none", md: 'none', lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" flexGrow={1} sx={{ fontSize: { xs: '20px', sm: '38px' } }}>
              DV Electro
              <RadioButtonCheckedOutlined
                color='error'
                sx={{
                  // position: 'absolute',
                  // top: { xs: 65, sm: 100, md: 95 },
                  fontSize: '15px',
                }}
              />
            </Typography>

            <Stack sx={{ display: { xs: 'none', md: 'flex' } }} flexGrow={1}>
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
                <StyledButtonEcran>Search</StyledButtonEcran>
              </ButtonGroup>
            </Stack>

            <Stack direction='row' spacing={2} flexGrow={1} justifyContent="flex-end">
              <Stack direction='column'>
                <IconButton>
                  <PermIdentity sx={{ color: "white" }} />
                </IconButton>
                <Typography variant='span' fontSize={10} sx={{ textAlign: 'center' }}>Wishlist</Typography>
              </Stack>
              <Stack direction='column'>
                <IconButton sx={{ color: 'white' }}>
                  <Badge badgeContent={4} color="error" sx={{ px: 1 }}>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <Typography variant='span' fontSize={10} sx={{ textAlign: 'center' }}>Wishlist</Typography>
              </Stack>


            </Stack>

          </Toolbar>
          <Toolbar sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} >
            <BoxContainer disableGutters >
              <ButtonGroup sx={{ marginTop: '15px' }} variant="contained" aria-label="outlined primary button group" size='small'>
                <StyledSelect
                  displayEmpty
                  sx={{ display: { xs: 'none', sm: 'initial' } }}
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
                  sx={{
                    bgcolor: 'white',
                    px: 2,
                    borderRadius: { xs: '15px 0 0 15px', sm: '0' },

                  }}
                  type='text'
                />
                <StyledButton>Search</StyledButton>
              </ButtonGroup>
            </BoxContainer>
          </Toolbar>
        </StyledContained>

      </StyledBox >
    </>

  );
};

export default Header;
