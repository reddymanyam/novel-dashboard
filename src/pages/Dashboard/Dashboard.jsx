import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Stack, Typography } from '@mui/material';
import profilepic from '../../assets/profile_icon.png';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const CustomImage = styled('img')({
  width:'30px',
  height:"30px",
  borderRadius:"50%",
  marginLeft:'5px',
  objectFit:"cover"
})

export default function FullWidthGrid() {
  return (
    <Stack sx={{ flexGrow: 1, width: "100%", padding: "30px" }}>
      <Grid container spacing={2} >
        <Grid size={{ xs: 6, md: 12 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "60px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
          <CustomImage src={profilepic} alt='profilepic' />
          <Typography variant="h6" component="h2">Welcome Sample</Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 12 }}>
          <Item sx={{ bgcolor: "#e8f6ff", height: "120px" }}></Item>
        </Grid>
      </Grid>
      <Typography variant="h6" component="h2">Featured listings</Typography>
      <Stack sx={{ flexGrow: 1, width: "100%"}}>
        
      <Grid container spacing={2} >
        <Grid size={{ xs: 6, md: 4 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "200px",borderRadius:"15px" }}></Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "200px",borderRadius:"15px" }}></Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "200px" ,borderRadius:"15px"}}></Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "200px",borderRadius:"15px" }}></Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "200px",borderRadius:"15px" }}></Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "200px",borderRadius:"15px" }}></Item>
        </Grid>
        
      </Grid>
      </Stack>

    </Stack>
  );
}
