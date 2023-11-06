import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const tableData = [
    {
        company: 'BBC',
        category: 'Film and TV Production Company',
        users: "28,251"
    },
    {
        company: 'ITV',
        category: 'Film and TV Production Company',
        users: "9,672",
        bgcolor: '#F8F5F4'
    },
    {
        company: 'East 15 Acting School',
        category: 'Training',
        users: "6,291"
    },
    {
        company: 'Mount view',
        category: 'Training',
        users: "5,051",
        bgcolor: '#F8F5F4'
    },
    {
        company: 'London Film School',
        category: 'Training',
        users: "4,246"
    },
    {
        company: 'Drama Studio London',
        category: 'Training, education, drama school',
        users: "3,858",
        bgcolor: '#F8F5F4'
    },
    {
        company: 'Warner Bros',
        category: 'Production Company',
        users: "3,552"
    },
    {
        company: 'CSSD',
        category: 'Training',
        users: "3,391",
        bgcolor: '#F8F5F4'
    },
    {
        company: 'BBC Radio',
        category: 'Radio',
        users: "3,300"
    },
]

const SecTwo = () => {
  return (
    <Grid container sx={{ px: {md: '6rem', sm: '3rem', xs: '2rem'}, gap: 3 }}>
        <Grid item className='flex justify-space-between' xs={12}>
        <Grid xs={9}>
            <Typography className='font-family-dm heading-40 dm-color font-weight-400'>Company / Category</Typography>
            </Grid>
            <Grid lg={2.2} md={2.38} sm={2.4} xs={2.5}>
            <Typography className='font-family-dm heading-40 dm-color font-weight-400'>Users</Typography>
            </Grid>
        </Grid>
        <div style={{backgroundColor: '#DECDC6', width: '100%', height: '4px'}}></div>
        {tableData.map((item)=>(
        <Grid item className='flex justify-space-between align-center' xs={12} sx={{bgcolor: item.bgcolor, p: {sm: '24px', xs: '30px'}, borderRadius: '12px'}}>
            <Grid xs={9}>
                <Typography className='heading-25 font-family-dm dm-color font-weight-400'>{item.company}</Typography>
                <Typography className='heading-20 text-color font-family-lato font-weight-400'>{item.category}</Typography>
            </Grid>
            <Grid xs={2}>
            <Typography className='heading-20 text-color font-family-lato font-weight-600'>{item.users}</Typography>
            </Grid>
        </Grid>
        ))}
        <Button
            sx={{
              p: "10px 30px",
            }}
            className="bg-primary-color white-color font-family-plus border-radius-5 sub-heading"
          >
            Next
          </Button>
    </Grid>
  );
};

export default SecTwo;
