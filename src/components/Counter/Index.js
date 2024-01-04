import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Counter = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Le temps est écoulé
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <Box display='flex' justifyContent='space-between'  gap={1} mb={2}  >
      
        <Stack direction='row' spacing={1}>
          <Avatar sx={{ width: {xs: '70px', md: '95px'}, height: {xs: '70px', md: '95px'}, fontSize: '13px', backgroundColor: '#D10024' }}>
            <Stack alignItems='center'>
              <Typography variant="h6">{timeRemaining.days} </Typography>
              <Typography variant="span" fontWeight={300}>days</Typography>
            </Stack>
          </Avatar>
          <Avatar sx={{ width: {xs: '70px', md: '95px'}, height: {xs: '70px', md: '95px'}, fontSize: '13px', backgroundColor: '#D10024' }}>
            <Stack alignItems='center'>
              <Typography variant="h6">{timeRemaining.hours} </Typography>
              <Typography variant="span" fontWeight={300}>hours</Typography>
            </Stack>
          </Avatar>
        </Stack>

        <Stack direction='row' spacing={1}>
          <Avatar sx={{ width: {xs: '70px', md: '95px'}, height: {xs: '70px', md: '95px'},  fontSize: '13px', backgroundColor: '#D10024' }}>
            <Stack alignItems='center'>
              <Typography variant="h6">{timeRemaining.minutes} </Typography>
              <Typography variant="span" fontWeight={300}>minutes</Typography>
            </Stack>
          </Avatar>
          <Avatar sx={{ width: {xs: '70px', md: '95px'}, height: {xs: '70px', md: '95px'},  fontSize: '13px', backgroundColor: '#D10024' }}>
            <Stack alignItems='center'>
              <Typography variant="h6">{timeRemaining.seconds} </Typography>
              <Typography variant="span" fontWeight={300}>seconds</Typography>
            </Stack>
          </Avatar>
        </Stack>
    </Box>
  )
}

export default Counter
