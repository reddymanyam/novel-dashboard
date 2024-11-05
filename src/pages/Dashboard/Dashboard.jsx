import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import profilepic from '../../assets/profile_icon.png';
import person from '../../assets/person.png';
import Box from '@mui/material/Box';
import profile from '../../assets/profile.png';
import adugodi from '../../assets/Frame 1000002926 (2).png';
import whitefield from '../../assets/Frame 1000002926 (4).png';
import mgroad from '../../assets/Frame 1000002926 (1).png';
import marthalli from '../../assets/Frame 1000002924.png';
import queensroad from '../../assets/Frame 1000002926 (3).png';
import kudluroad from '../../assets/Frame 1000002926.png';
import img1 from '../../assets/img.png';
import img2 from '../../assets/img (1).png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  position: 'relative',
  padding: "0px",
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const CustomImage = styled('img')({
  width: '30px',
  height: "30px",
  borderRadius: "50%",
  margin: '8px',
  objectFit: "cover"
})

const CustomImage1 = styled('img')({
  width: '100%',
  height: "100%",
  borderRadius: "15px"
})

const CustomItem = styled(Item)({
  backgroundColor: "#e8f6ff", height: "200px", borderRadius: "15px"
})

const CustomBox = styled(Box)({
  position:"absolute",
  color:"white",
  backgroundColor:"rgba(0, 0, 0, 0.5)",
  borderRadius: "5px",
  bottom:"30%",
  left:"10%",
  right:'5%'
})

const CustomTypography = styled(Typography)({
   variant:"h6",
   component:"h2",
   fontSize:"0.9rem"
})

export default function Dashboard() {
 
  const locations = [
    { id: 1, image: adugodi, title: 'Novel Business Park - Adugodi', location: 'Adugodi, Bengaluru' },
    { id: 2, image: whitefield, title: 'Novel Business Park - Whitefield', location: 'Whitefield, Bengaluru' },
    { id: 3, image: mgroad, title: 'Novel Business Park - MG Road', location: 'MG Road, Bengaluru' },
    { id: 4, image: marthalli, title: 'Novel Business Park - Marathahalli', location: 'Marathahalli, Bengaluru' },
    { id: 5, image: queensroad, title: 'Novel Business Park - Queens Road', location: 'Queens Road, Bengaluru' },
    { id: 6, image: kudluroad, title: 'Novel Business Park - Kudlu Road', location: 'Kudlu Road, Bengaluru' },
  ];
  
  
  return (
    
    <Stack sx={{ flexGrow: 1, width: "100%", padding: "30px" }}>
   
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 12 }} key={location.id}>
          <Item sx={{ bgcolor: "#e8f6ff", height: "60px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <CustomImage src={profilepic} alt='profilepic' />
            <Typography variant="h6" component="h2" color='black'>Welcome Sample</Typography>
            <img src={person} alt='person' style={{ height: "100%", marginLeft: "auto" }} />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item sx={{ bgcolor: "#e8f6ff", height: "120px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <img src={profile} alt='person' style={{ height: "100%", marginLeft: "4%" }} />
            <Box display="flex" flexDirection="column" alignItems="center" marginLeft="27%" >
              <Typography variant="h5" component="h2" color='black'>Facing Issues?</Typography>
              <Button variant="contained" size='small'>Raise a Ticket </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Typography variant="h6" component="h2">Featured listings</Typography>

      <Stack width="100%">
        <Grid container spacing={2} >
          {locations.map((location)=> (
          <Grid size={{ xs: 6, md: 4 }} >
            <CustomItem>
              <CustomImage1 src={location.image} alt='person' />
              <CustomBox>
                <CustomTypography>{location.title}</CustomTypography>
                <CustomTypography ><LocationOnOutlinedIcon sx={{ fontSize: "1rem" }} /> {location.location}</CustomTypography>
              </CustomBox>
            </CustomItem>
          </Grid>
            ))}
        </Grid>
      </Stack>
      <Typography variant='h6' component="h2" > Events</Typography>
      <Stack >
        <Grid container spacing={2} marginBottom={3}>
          <Grid size={{ xs: 12, md: 6 }} >
            <CustomItem>
              <CustomImage1 src={img1} alt='person' />
            </CustomItem>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} >
            <CustomItem >
              <CustomImage1 src={img2} alt='person' />
            </CustomItem>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
   
  );
}
