import { Add } from '@mui/icons-material'
import { Box, Container, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react';


const Sidebar = () => {

  return (
       // sx={{  position: 'sticky', height: 'auto', top:'70px'}}
      //  <Paper variant='outlined' sx={{ overflowY: 'auto', maxHeight: 'calc(90vh - 40px)' }}></Paper>
    <Box >
      <Divider>
        <Typography variant='h6' color='#D10024'>CATEGORY</Typography>
      </Divider>
      <Paper variant='outlined'>
        <List>
          <ListItem disablePadding secondaryAction={
            <IconButton edge="end" aria-label="Add">
              <Add />
            </IconButton>
          }>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="ORDINATEURS PERSONNELS"   primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
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
              <ListItemText primary="ECRANS"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
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
              <ListItemText primary="STOCKAGE EXTERNE"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
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
              <ListItemText primary="ECRANS"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="PERIPHERIQUES D'ENTREE"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="IMPRIMANTES ET SCANER"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="RESEAUX ET CONNECTIVITE"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="ACCESSOIRES AUDIO"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="APPAREILS DE JEUX"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding >
            <ListItemButton sx={{ color: '#2B2D42', '&:hover': { background: 'transparent' } }} disableRipple >
              <ListItemText primary="CAMERAS ET WEBCAM"  primaryTypographyProps={{ fontSize: {sm : '12px', md: '14px'} }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>

  )
}

export default Sidebar
