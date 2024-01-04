import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share, ShoppingCart } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Divider, FormControl, IconButton, InputLabel, MenuItem, Paper, Rating, Select, Skeleton, Stack, Typography, styled } from '@mui/material'
import laptop from '../../assets/images/9.png';
import phone from '../../assets/images/phone.png';
import camera from '../../assets/images/camer.png';
import ecran from '../../assets/images/ecran.png';
import gaming from '../../assets/images/Gaming.png';
import manette from '../../assets/images/manette.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import Counter from '../Counter/Index';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const targetDate = new Date('2024-02-02T23:59:59');

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  const StyledCard = styled(Card)(({ theme }) => ({

    transition: 'border 0.2s ease',
    '&:hover': {
      border: '1px solid #D10024'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      height: 'auto'
    },

    [theme.breakpoints.up('sm')]: {
      width: '95%',
      height: 'auto'
    }
  }))

  const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    objectFit: 'unset',
    [theme.breakpoints.up('md')]: {
      width: '210px',
      height: '190px',
    },

    [theme.breakpoints.down('md')]: {
      width: '150px',
      height: '130px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '100px',
      width: '135px',
    },

  }))

  const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      height: '190px',
    },

    [theme.breakpoints.down('md')]: {
      height: '130px',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }))
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#D10024',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '40px',
    fontWeight: 700,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#D10024',
      color: 'white',
    }
  }))
  return (

    <Box display='flex' flexDirection='column' gap={5}>
      <Box>
        <Typography variant='h6' color='#D10024' mb={2}>NEW PRODUCTS</Typography>
        <Carousel
          autoPlay
          autoPlaySpeed={6000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite
          responsive={responsive}
        >
          <Box display="flex" sx={{ justifyContent: { xs: 'center', md: 'flex-start', sm: 'flex-start' } }}>
            <StyledCard variant='outlined'>
              <Stack direction="row" pt='36px' spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                {/* <Skeleton
                  variant="text"
                  sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px' }, fontSize: { xs: '20px' } }}
                /> */}
              </Stack> 
              <Stack direction="row" px={2} pt='36px' spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                {/* <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                  NEW
                </Avatar>
                <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                  -30%
                </Avatar> */}
              </Stack>
              <Box display='flex' justifyContent='center'>
                <StyledSkeleton
                  variant="rectangular"
                  sx={{ display: imageLoaded ? 'none' : 'block', width: '100%', mx: '2px' }}
                />
                <StyledCardMedia
                  component="img"
                  image={laptop}
                  alt="Paella dish"
                  onLoad={handleImageLoad}
                  sx={{ display: imageLoaded ? 'block' : 'none' }}
                />
              </Box>

              <CardContent sx={{ m: 0, p: 0 }}>

                <Stack sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '120px', md: '180px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px', md: '150px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '90px', md: '100px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                </Stack>


                <Stack spacing={1} alignItems='center' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                  <Typography gutterBottom variant="p" component="div" color="text.secondary" sx={{ fontSize: { xs: '12px', sm: '14px' }, }}>
                    CATEGORY
                  </Typography>
                  <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '15px' }, color: '#2B2D42', fontWeight: '900' }}>
                    LAPTOP
                  </Typography>
                  <Stack direction='row' justifyContent='center'>
                    <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '18px' }, color: '#D10024', fontWeight: '900' }}>
                      $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: { xs: '11px', sm: '14px' } }} ><s color='text.secondary'>$9990.0</s></Typography>
                    </Typography>
                  </Stack>
                  <Divider>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                  </Divider>
                  <Stack direction='row' justifyContent='center'>
                    <IconButton aria-label="add to favorites" size='small'>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color='error' />}
                      />
                    </IconButton>
                    <Button sx={{ color: 'green' }} variant="text" startIcon={<ShoppingCart />} size='small'>
                      Add
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>

            </StyledCard>
          </Box>
          <Box display="flex" sx={{ justifyContent: { xs: 'center', md: 'flex-start', sm: 'flex-start' } }}>
            <StyledCard variant='outlined'>
              <Stack direction="row" pt={1} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                <Skeleton
                  variant="text"
                  sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px' }, fontSize: { xs: '20px' } }}
                />
              </Stack>
              <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                  NEW
                </Avatar>
                <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                  -30%
                </Avatar>
              </Stack>
              <Box display='flex' justifyContent='center'>
                <StyledSkeleton
                  variant="rectangular"
                  sx={{ display: imageLoaded ? 'none' : 'block', width: '100%', mx: '2px' }}
                />
                <StyledCardMedia
                  component="img"
                  image={phone}
                  alt="Paella dish"
                  onLoad={handleImageLoad}
                  sx={{ display: imageLoaded ? 'block' : 'none' }}
                />
              </Box>

              <CardContent sx={{ m: 0, p: 0 }}>

                <Stack sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '120px', md: '180px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px', md: '150px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '90px', md: '100px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                </Stack>


                <Stack spacing={1} alignItems='center' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                  <Typography gutterBottom variant="p" component="div" color="text.secondary" sx={{ fontSize: { xs: '12px', sm: '14px' }, }}>
                    CATEGORY
                  </Typography>
                  <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '15px' }, color: '#2B2D42', fontWeight: '900' }}>
                    LAPTOP
                  </Typography>
                  <Stack direction='row' justifyContent='center'>
                    <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '18px' }, color: '#D10024', fontWeight: '900' }}>
                      $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: { xs: '11px', sm: '14px' } }} ><s color='text.secondary'>$9990.0</s></Typography>
                    </Typography>
                  </Stack>
                  <Divider>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                  </Divider>
                  <Stack direction='row' justifyContent='center'>
                    <IconButton aria-label="add to favorites" size='small'>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color='error' />}
                      />
                    </IconButton>
                    <Button sx={{ color: 'green' }} variant="text" startIcon={<ShoppingCart />} size='small'>
                      Add
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>

            </StyledCard>
          </Box>
          <Box display="flex" sx={{ justifyContent: { xs: 'center', md: 'flex-start', sm: 'flex-start' } }}>
            <StyledCard variant='outlined'>
              <Stack direction="row" pt='36px' spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                {/* <Skeleton
                  variant="text"
                  sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px' }, fontSize: { xs: '20px' } }}
                /> */}
              </Stack> 
              <Stack direction="row" px={2} pt='36px' spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                {/* <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                  NEW
                </Avatar>
                <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                  -30%
                </Avatar> */}
              </Stack>
              <Box display='flex' justifyContent='center'>
                <StyledSkeleton
                  variant="rectangular"
                  sx={{ display: imageLoaded ? 'none' : 'block', width: '100%', mx: '2px' }}
                />
                <StyledCardMedia
                  component="img"
                  image={camera}
                  alt="Paella dish"
                  onLoad={handleImageLoad}
                  sx={{ display: imageLoaded ? 'block' : 'none' }}
                />
              </Box>

              <CardContent sx={{ m: 0, p: 0 }}>

                <Stack sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '120px', md: '180px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px', md: '150px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '90px', md: '100px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                </Stack>


                <Stack spacing={1} alignItems='center' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                  <Typography gutterBottom variant="p" component="div" color="text.secondary" sx={{ fontSize: { xs: '12px', sm: '14px' }, }}>
                    CATEGORY
                  </Typography>
                  <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '15px' }, color: '#2B2D42', fontWeight: '900' }}>
                    LAPTOP
                  </Typography>
                  <Stack direction='row' justifyContent='center'>
                    <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '18px' }, color: '#D10024', fontWeight: '900' }}>
                      $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: { xs: '11px', sm: '14px' } }} ><s color='text.secondary'>$9990.0</s></Typography>
                    </Typography>
                  </Stack>
                  <Divider>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                  </Divider>
                  <Stack direction='row' justifyContent='center'>
                    <IconButton aria-label="add to favorites" size='small'>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color='error' />}
                      />
                    </IconButton>
                    <Button sx={{ color: 'green' }} variant="text" startIcon={<ShoppingCart />} size='small'>
                      Add
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>

            </StyledCard>
          </Box>
          <Box display="flex" sx={{ justifyContent: { xs: 'center', md: 'flex-start', sm: 'flex-start' } }}>
            <StyledCard variant='outlined'>
              <Stack direction="row" pt={1} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                <Skeleton
                  variant="text"
                  sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px' }, fontSize: { xs: '20px' } }}
                />
              </Stack>
              <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
         
                <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                  -30%
                </Avatar>
              </Stack>
              <Box display='flex' justifyContent='center'>
                <StyledSkeleton
                  variant="rectangular"
                  sx={{ display: imageLoaded ? 'none' : 'block', width: '100%', mx: '2px' }}
                />
                <StyledCardMedia
                  component="img"
                  image={ecran}
                  alt="Paella dish"
                  onLoad={handleImageLoad}
                  sx={{ display: imageLoaded ? 'block' : 'none' }}
                />
              </Box>

              <CardContent sx={{ m: 0, p: 0 }}>

                <Stack sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '120px', md: '180px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px', md: '150px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '90px', md: '100px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                </Stack>


                <Stack spacing={1} alignItems='center' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                  <Typography gutterBottom variant="p" component="div" color="text.secondary" sx={{ fontSize: { xs: '12px', sm: '14px' }, }}>
                    CATEGORY
                  </Typography>
                  <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '15px' }, color: '#2B2D42', fontWeight: '900' }}>
                    LAPTOP
                  </Typography>
                  <Stack direction='row' justifyContent='center'>
                    <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '18px' }, color: '#D10024', fontWeight: '900' }}>
                      $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: { xs: '11px', sm: '14px' } }} ><s color='text.secondary'>$9990.0</s></Typography>
                    </Typography>
                  </Stack>
                  <Divider>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                  </Divider>
                  <Stack direction='row' justifyContent='center'>
                    <IconButton aria-label="add to favorites" size='small'>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color='error' />}
                      />
                    </IconButton>
                    <Button sx={{ color: 'green' }} variant="text" startIcon={<ShoppingCart />} size='small'>
                      Add
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>

            </StyledCard>
          </Box>
          <Box display="flex" sx={{ justifyContent: { xs: 'center', md: 'flex-start', sm: 'flex-start' } }}>
            <StyledCard variant='outlined'>
              <Stack direction="row" pt={1} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                <Skeleton
                  variant="text"
                  sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px' }, fontSize: { xs: '20px' } }}
                />
              </Stack>
              <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                  NEW
                </Avatar>
                <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                  -30%
                </Avatar>
              </Stack>
              <Box display='flex' justifyContent='center'>
                <StyledSkeleton
                  variant="rectangular"
                  sx={{ display: imageLoaded ? 'none' : 'block', width: '100%', mx: '2px' }}
                />
                <StyledCardMedia
                  component="img"
                  image={gaming}
                  alt="Paella dish"
                  onLoad={handleImageLoad}
                  sx={{ display: imageLoaded ? 'block' : 'none' }}
                />
              </Box>

              <CardContent sx={{ m: 0, p: 0 }}>

                <Stack sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '120px', md: '180px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px', md: '150px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '90px', md: '100px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                </Stack>


                <Stack spacing={1} alignItems='center' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                  <Typography gutterBottom variant="p" component="div" color="text.secondary" sx={{ fontSize: { xs: '12px', sm: '14px' }, }}>
                    CATEGORY
                  </Typography>
                  <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '15px' }, color: '#2B2D42', fontWeight: '900' }}>
                    LAPTOP
                  </Typography>
                  <Stack direction='row' justifyContent='center'>
                    <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '18px' }, color: '#D10024', fontWeight: '900' }}>
                      $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: { xs: '11px', sm: '14px' } }} ><s color='text.secondary'>$9990.0</s></Typography>
                    </Typography>
                  </Stack>
                  <Divider>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                  </Divider>
                  <Stack direction='row' justifyContent='center'>
                    <IconButton aria-label="add to favorites" size='small'>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color='error' />}
                      />
                    </IconButton>
                    <Button sx={{ color: 'green' }} variant="text" startIcon={<ShoppingCart />} size='small'>
                      Add
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>

            </StyledCard>
          </Box>
          <Box display="flex" sx={{ justifyContent: { xs: 'center', md: 'flex-start', sm: 'flex-start' } }}>
            <StyledCard variant='outlined'>
              <Stack direction="row" pt={1} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                <Skeleton
                  variant="text"
                  sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px' }, fontSize: { xs: '20px' } }}
                />
              </Stack>
              <Stack direction="row" px={2} pt={2} spacing={1} justifyContent='end' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                <Avatar sx={{ bgcolor: '#D10024', fontSize: 12, height: 20, width: 45, border: '2px solid #D10024' }} variant="square">
                  NEW
                </Avatar>
                <Avatar sx={{ bgcolor: 'white', fontSize: 12, height: 20, width: 45, color: '#D10024', border: '2px solid #D10024' }} variant="square">
                  -30%
                </Avatar>
              </Stack>
              <Box display='flex' justifyContent='center'>
                <StyledSkeleton
                  variant="rectangular"
                  sx={{ display: imageLoaded ? 'none' : 'block', width: '100%', mx: '2px' }}
                />
                <StyledCardMedia
                  component="img"
                  image={manette}
                  alt="Paella dish"
                  onLoad={handleImageLoad}
                  sx={{ display: imageLoaded ? 'block' : 'none' }}
                />
              </Box>

              <CardContent sx={{ m: 0, p: 0 }}>

                <Stack sx={{ display: imageLoaded ? 'none' : 'flex', mx: '2px' }}>
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '120px', md: '180px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '100px', md: '150px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ display: imageLoaded ? 'none' : 'block', textAlign: 'center', width: { xs: '90px', md: '100px' }, fontSize: { xs: '15px', md: '20px' } }}
                  />
                </Stack>


                <Stack spacing={1} alignItems='center' sx={{ display: imageLoaded ? 'flex' : 'none' }}>
                  <Typography gutterBottom variant="p" component="div" color="text.secondary" sx={{ fontSize: { xs: '12px', sm: '14px' }, }}>
                    CATEGORY
                  </Typography>
                  <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '15px' }, color: '#2B2D42', fontWeight: '900' }}>
                    LAPTOP
                  </Typography>
                  <Stack direction='row' justifyContent='center'>
                    <Typography variant="h4" href="#" sx={{ fontSize: { xs: '12px', sm: '18px' }, color: '#D10024', fontWeight: '900' }}>
                      $980.00 <Typography variant='sub' component='sub' color='text.secondary' sx={{ fontWeight: 400, fontSize: { xs: '11px', sm: '14px' } }} ><s color='text.secondary'>$9990.0</s></Typography>
                    </Typography>
                  </Stack>
                  <Divider>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={1} readOnly size="small" />
                  </Divider>
                  <Stack direction='row' justifyContent='center'>
                    <IconButton aria-label="add to favorites" size='small'>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color='error' />}
                      />
                    </IconButton>
                    <Button sx={{ color: 'green' }} variant="text" startIcon={<ShoppingCart />} size='small'>
                      Add
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>

            </StyledCard>
          </Box>

        </Carousel>
      </Box>

      <Box
        display='flex'
        alignItems='center'
        sx={{ backgroundColor: '#E4E7ED', justifyContent: { xs: 'center', md: 'space-between' } }}
        mb={3}
        py={3}
      >
        <div className='img-pub'>
          <Avatar src={ecran} alt='laptop' sx={{ width: { sm: '110px', md: '160px', lg: '200px' }, height: { sm: '110px', md: '160px', lg: '200px' }, borderRadius: 0, display: { xs: 'none', sm: 'block' } }} />
        </div>

        <Stack direction='column' alignItems='center' rowGap={1}>
          <Counter targetDate={targetDate} />
          <Typography variant='h5' fontWeight={700} color='#2B2D42'>HOT DEAL THIS WEEK</Typography>
          <Typography variant='p' mb={2}>NEW COLLECTION UP TO 50% OFF</Typography>
          <StyledButton disableElevation disableRipple variant='contained'>
            SHOP NOW
          </StyledButton>
        </Stack>
        <div className='img-pub' >
          <Avatar src={camera} alt='laptop' className='img-pub' sx={{ width: { sm: '110px', md: '160px', lg: '200px' }, height: { sm: '110px', md: '160px', lg: '200px' }, borderRadius: 0, display: { xs: 'none', sm: 'block' } }} />
        </div>
      </Box>
    </Box>
  )
}

export default Home
