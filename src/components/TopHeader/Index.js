import { AttachMoney, LocalPhone, LocationOn, Mail, PersonOutline } from '@mui/icons-material'
import { AppBar, Box, Container, Stack, Typography, styled } from '@mui/material'
import React from 'react'

const TopHeader = () => {
  const StyledBox = styled(Box)({
    backgroundColor: '#1E1F29',
    color: 'white',
    padding: 12,
  })


  return (
    <AppBar position='static'>
      <StyledBox>
        <Container disableGutters sx={{ display: 'flex', justifyContent: { xs: 'space-around', sm: 'space-between' }, maxWidth: { xs: 'xs', sm: 'md', md: 'xl', lg: 'lg', xl: 'lg' } }}>
          <Stack direction='row'>
            <LocalPhone sx={{ fontSize: '12px' }} color='error' />
            <Typography variant='a' href="#" component="a" fontSize={12}
              sx={{
                marginLeft: 1,
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: 'red'
                }
              }}>
              +237-696-74-68-57
            </Typography>

            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Mail sx={{ fontSize: '12px', marginLeft: 2 }} color='error' />
              <Typography variant='a' href="#" component="a" fontSize={12}
                sx={{
                  marginLeft: 1,
                  textDecoration: 'none',
                  color: 'white',
                  '&:hover': {
                    color: 'red'
                  }
                }}>
                shababizetre@gmail.com
              </Typography>
            </Stack>

            <LocationOn sx={{ fontSize: '12px', marginLeft: 2 }} color='error' />
            <Typography variant='a' href="#" component="a" fontSize={12}
              sx={{
                marginLeft: 1,
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: 'red'
                }
              }}>
              Douala-Bepanda
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <AttachMoney sx={{ fontSize: '12px' }} color='error' />
            <Typography variant='a' href="#" component="a" fontSize={12}
              sx={{
                marginLeft: 1,
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: 'red'
                }
              }}>
              USD
            </Typography>
            <PersonOutline sx={{ fontSize: '12px', marginLeft: 2 }} color='error' />
            <Typography variant='a' href="#" component="a" fontSize={12}
              sx={{
                marginLeft: 1,
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: 'red'
                }
              }}>
              My Account
            </Typography>
          </Stack>
        </Container>
      </StyledBox>

    </AppBar>

  )
}

export default TopHeader
