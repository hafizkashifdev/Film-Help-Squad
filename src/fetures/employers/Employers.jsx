import React from 'react'
import SecOne from "./components/SecOne";
import SecTwo from "./components/SecTwo";
import { Box } from '@mui/material';

const Employers = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: {md: '7rem', xs: '4rem'}}}>
      <SecOne />
      <SecTwo />
    </Box>
  )
}

export default Employers