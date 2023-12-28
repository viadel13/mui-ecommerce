import { AppBar, Box, Container, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Box  borderBottom='2px solid #E4E7ED' sx={{display:{xs: 'none', sm: 'block'}, bgcolor: 'white', zIndex: '999'}} position='sticky' top={0}>
      <Container disableGutters>
        <Stack direction='row' justifyContent='center'>
          <List sx={{ display: 'flex' }}>
            <ListItem disablePadding>
              <ListItemButton disableGutters  sx={{color: '#2B2D42', '&:hover':{background: 'transparent', color: '#D10024'}}} disableRipple >
                <ListItemText primary="Home"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{color: '#2B2D42', '&:hover':{background: 'transparent', color: '#D10024'}}} disableRipple >
                <ListItemText primary="Shop" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{color: '#2B2D42', '&:hover':{background: 'transparent', color: '#D10024'}}} disableRipple >
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{color: '#2B2D42', '&:hover':{background: 'transparent', color: '#D10024'}}} disableRipple >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Container>

    </Box>
  )
}

export default Navbar
