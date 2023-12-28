import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share, ShoppingCart } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Divider, IconButton, Paper, Rating, Stack, Typography, styled } from '@mui/material'
import laptop from '../../assets/images/9.png';
import phone from '../../assets/images/phone.png';
import camera from '../../assets/images/camer.png';
import ecran from '../../assets/images/ecran.png';
import gaming from '../../assets/images/Gaming.png';
import manette from '../../assets/images/manette.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const StyledCard = styled(Card)(({theme})=>({

    transition: 'border 0.2s ease',
    '&:hover':{
      border: '1px solid #D10024'
    },
    [theme.breakpoints.down('sm')]:{
      width: '295px'
    }
  }))

  return (
    <Box>
      <Typography variant='h6' color='#D10024' mb={2}>NEW PRODUCTS</Typography>
      <Carousel 
        autoPlay
        autoPlaySpeed={6000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite 
        responsive={responsive}>
        <Box display="flex" sx={{justifyContent: {xs: 'center', md: 'flex-start', sm: 'flex-start'}}}>
          <StyledCard variant='outlined'>
            <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end'>
              <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                NEW
              </Avatar>
              <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                -30%
              </Avatar>
            </Stack>
            <Box display='flex' justifyContent='center'>
              <CardMedia
                component="img"
                height="190"
                sx={{ objectFit: 'unset', width: { md: '260px', xs: '100%' } }}
                image={laptop}
                alt="Paella dish"
              />
            </Box>

            <CardContent>
              <Stack spacing={1}>
                <Typography gutterBottom variant="P" component="div" color="text.secondary" sx={{ fontSize: '14px', textAlign: 'center' }}>
                  CATEGORY
                </Typography>
                <Typography variant="h4" href="#" sx={{ fontSize: '15px', textAlign: 'center', color: '#2B2D42', fontWeight: '900' }}>
                  PRODUCT NAME GOES HERE
                </Typography>
                <Stack direction='row' justifyContent='center'>
                  <Typography variant="h4" href="#" sx={{ fontSize: '18px', textAlign: 'center', color: '#D10024', fontWeight: '900' }}>
                    $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: '14px' }} ><s color='text.secondary'>$9990.0</s></Typography>
                  </Typography>
                </Stack>
                <Divider>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                </Divider>
                <Stack direction='row' justifyContent='center'>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  </IconButton>
                  <Button sx={{color: 'green'}} variant="text" startIcon={<ShoppingCart />} size='small'>
                    Add
                  </Button>
                </Stack>
              </Stack>
            </CardContent>

          </StyledCard>
        </Box>
      
        <Box display="flex" sx={{justifyContent: {xs: 'center', md: 'flex-start', sm: 'flex-start'}}}>
          <StyledCard variant='outlined'>
            <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end'>
              <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                NEW
              </Avatar>
              <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                -30%
              </Avatar>
            </Stack>
            <Box display='flex' justifyContent='center'>
              <CardMedia
                component="img"
                height="190"
                sx={{ objectFit: 'unset', width: { md: '260px', xs: '100%' } }}
                image={ecran}
                alt="Paella dish"
              />
            </Box>

            <CardContent>
              <Stack spacing={1}>
                <Typography gutterBottom variant="P" component="div" color="text.secondary" sx={{ fontSize: '14px', textAlign: 'center' }}>
                  CATEGORY
                </Typography>
                <Typography variant="h4" href="#" sx={{ fontSize: '15px', textAlign: 'center', color: '#2B2D42', fontWeight: '900' }}>
                  PRODUCT NAME GOES HERE
                </Typography>
                <Stack direction='row' justifyContent='center'>
                  <Typography variant="h4" href="#" sx={{ fontSize: '18px', textAlign: 'center', color: '#D10024', fontWeight: '900' }}>
                    $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: '14px' }} ><s color='text.secondary'>$9990.0</s></Typography>
                  </Typography>
                </Stack>
                <Divider>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                </Divider>
                <Stack direction='row' justifyContent='center'>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  </IconButton>
                  <Button sx={{color: 'green'}} variant="text" startIcon={<ShoppingCart />} size='small'>
                    Add
                  </Button>
                </Stack>
              </Stack>
            </CardContent>

          </StyledCard>
        </Box>
        <Box display="flex" sx={{justifyContent: {xs: 'center', md: 'flex-start', sm: 'flex-start'}}}>
          <StyledCard variant='outlined'>
            <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end'>
              <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                NEW
              </Avatar>
              <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                -30%
              </Avatar>
            </Stack>
            <Box display='flex' justifyContent='center'>
              <CardMedia
                component="img"
                height="190"
                sx={{ objectFit: 'unset', width: { md: '260px', xs: '100%' } }}
                image={gaming}
                alt="Paella dish"
              />
            </Box>

            <CardContent>
              <Stack spacing={1}>
                <Typography gutterBottom variant="P" component="div" color="text.secondary" sx={{ fontSize: '14px', textAlign: 'center' }}>
                  CATEGORY
                </Typography>
                <Typography variant="h4" href="#" sx={{ fontSize: '15px', textAlign: 'center', color: '#2B2D42', fontWeight: '900' }}>
                  PRODUCT NAME GOES HERE
                </Typography>
                <Stack direction='row' justifyContent='center'>
                  <Typography variant="h4" href="#" sx={{ fontSize: '18px', textAlign: 'center', color: '#D10024', fontWeight: '900' }}>
                    $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: '14px' }} ><s color='text.secondary'>$9990.0</s></Typography>
                  </Typography>
                </Stack>
                <Divider>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                </Divider>
                <Stack direction='row' justifyContent='center'>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  </IconButton>
                  <Button sx={{color: 'green'}} variant="text" startIcon={<ShoppingCart />} size='small'>
                    Add
                  </Button>
                </Stack>
              </Stack>
            </CardContent>

          </StyledCard>
        </Box>
        <Box display="flex" sx={{justifyContent: {xs: 'center', md: 'flex-start', sm: 'flex-start'}}}>
          <StyledCard variant='outlined'>
            <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end'>
              <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                NEW
              </Avatar>
              <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                -30%
              </Avatar>
            </Stack>
            <Box display='flex' justifyContent='center'>
              <CardMedia
                component="img"
                height="190"
                sx={{ objectFit: 'unset', width: { md: '260px', xs: '100%' } }}
                image={manette}
                alt="Paella dish"
              />
            </Box>

            <CardContent>
              <Stack spacing={1}>
                <Typography gutterBottom variant="P" component="div" color="text.secondary" sx={{ fontSize: '14px', textAlign: 'center' }}>
                  CATEGORY
                </Typography>
                <Typography variant="h4" href="#" sx={{ fontSize: '15px', textAlign: 'center', color: '#2B2D42', fontWeight: '900' }}>
                  PRODUCT NAME GOES HERE
                </Typography>
                <Stack direction='row' justifyContent='center'>
                  <Typography variant="h4" href="#" sx={{ fontSize: '18px', textAlign: 'center', color: '#D10024', fontWeight: '900' }}>
                    $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: '14px' }} ><s color='text.secondary'>$9990.0</s></Typography>
                  </Typography>
                </Stack>
                <Divider>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                </Divider>
                <Stack direction='row' justifyContent='center'>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  </IconButton>
                  <Button sx={{color: 'green'}} variant="text" startIcon={<ShoppingCart />} size='small'>
                    Add
                  </Button>
                </Stack>
              </Stack>
            </CardContent>

          </StyledCard>
        </Box>
        {/* <Box display="flex" sx={{justifyContent: {xs: 'center', md: 'flex-start', sm: 'flex-start'}}}>
          <StyledCard variant='outlined'>
            <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end'>
              <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                NEW
              </Avatar>
              <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                -30%
              </Avatar>
            </Stack>
            <Box display='flex' justifyContent='center'>
              <CardMedia
                component="img"
                height="190"
                sx={{ objectFit: 'unset', width: { md: '260px', xs: '100%' } }}
                image={camera}
                alt="Paella dish"
              />
            </Box>

            <CardContent>
              <Stack spacing={1}>
                <Typography gutterBottom variant="P" component="div" color="text.secondary" sx={{ fontSize: '14px', textAlign: 'center' }}>
                  CATEGORY
                </Typography>
                <Typography variant="h4" href="#" sx={{ fontSize: '15px', textAlign: 'center', color: '#2B2D42', fontWeight: '900' }}>
                  PRODUCT NAME GOES HERE
                </Typography>
                <Stack direction='row' justifyContent='center'>
                  <Typography variant="h4" href="#" sx={{ fontSize: '18px', textAlign: 'center', color: '#D10024', fontWeight: '900' }}>
                    $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: '14px' }} ><s color='text.secondary'>$9990.0</s></Typography>
                  </Typography>
                </Stack>
                <Divider>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                </Divider>
                <Stack direction='row' justifyContent='center'>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  </IconButton>
                  <Button sx={{color: 'green'}} variant="text" startIcon={<ShoppingCart />} size='small'>
                    Add
                  </Button>
                </Stack>
              </Stack>
            </CardContent>

          </StyledCard>
        </Box>
        <Box display="flex" sx={{justifyContent: {xs: 'center', md: 'flex-start', sm: 'flex-start'}}}>
          <StyledCard variant='outlined'>
            <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end'>
              <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                NEW
              </Avatar>
              <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                -30%
              </Avatar>
            </Stack>
            <Box display='flex' justifyContent='center'>
              <CardMedia
                component="img"
                height="190"
                sx={{ objectFit: 'unset', width: { md: '260px', xs: '100%' } }}
                image={camera}
                alt="Paella dish"
              />
            </Box>

            <CardContent>
              <Stack spacing={1}>
                <Typography gutterBottom variant="P" component="div" color="text.secondary" sx={{ fontSize: '14px', textAlign: 'center' }}>
                  CATEGORY
                </Typography>
                <Typography variant="h4" href="#" sx={{ fontSize: '15px', textAlign: 'center', color: '#2B2D42', fontWeight: '900' }}>
                  PRODUCT NAME GOES HERE
                </Typography>
                <Stack direction='row' justifyContent='center'>
                  <Typography variant="h4" href="#" sx={{ fontSize: '18px', textAlign: 'center', color: '#D10024', fontWeight: '900' }}>
                    $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: '14px' }} ><s color='text.secondary'>$9990.0</s></Typography>
                  </Typography>
                </Stack>
                <Divider>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                </Divider>
                <Stack direction='row' justifyContent='center'>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite color='error' />}
                    />
                  </IconButton>
                  <Button sx={{color: 'green'}} variant="text" startIcon={<ShoppingCart />} size='small'>
                    Add
                  </Button>
                </Stack>
              </Stack>
            </CardContent>

          </StyledCard>
        </Box> */}

      </Carousel>
    </Box>
  )
}

export default Home
