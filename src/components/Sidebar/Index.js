import { Add } from '@mui/icons-material'
import { Box, Container, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react';


const Sidebar = () => {

  return (
    <Box sx={{  position: 'sticky', height: '90vh', top:'10vh'}}>
      <Divider>
        <Typography variant='h6' color='#D10024'>CATEGORY</Typography>
      </Divider>
      <Paper variant='outlined' sx={{ overflowY: 'auto', maxHeight: 'calc(90vh - 40px)' }}>
        <List>
          <ListItem disablePadding secondaryAction={
            <IconButton edge="end" aria-label="Add">
              <Add />
            </IconButton>
          }>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="ORDINATEURS PERSONNELS" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding secondaryAction={
            <IconButton edge="end" aria-label="Add">
              <Add />
            </IconButton>
          }>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="ECRANS" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding secondaryAction={
            <IconButton edge="end" aria-label="Add">
              <Add />
            </IconButton>
          }>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="STOCKAGE EXTERNE" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding secondaryAction={
            <IconButton edge="end" aria-label="Add">
              <Add />
            </IconButton>
          }>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="ECRANS" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="PERIPHERIQUES D'ENTREE" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="IMPRIMANTES ET SCANER" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="RESEAUX ET CONNECTIVITE" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="ACCESSOIRES AUDIO" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="APPAREILS DE JEUX" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="CAMERAS ET WEBCAM" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>

  )
}

export default Sidebar
