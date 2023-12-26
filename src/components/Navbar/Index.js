import { Box, Button, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Box>
      <Container disableGutters>
 
          {/* <List sx={{ display: 'flex' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Shop" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List> */}
          <Button sx={{m: 0, p: 0}}>Hello</Button>
       
      </Container>

    </Box>
  )
}

export default Navbar
