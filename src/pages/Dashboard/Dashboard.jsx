import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, Stack, Typography } from '@mui/material';
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
  width: '30px',
  height: "30px",
  borderRadius: "50%",
  margin: '8px',
  objectFit: "cover"
})

const CustomImage1 = styled('img')({
  width: '100%',
  height:"100%",
  borderRadius:"15px"
})

const CustomItem = styled(Item)({
  backgroundColor: "#e8f6ff", height: "200px", borderRadius: "15px"
})
export default function FullWidthGrid() {
  return (
    <Stack sx={{ flexGrow: 1, width: "100%", padding: "30px" }}>
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 12 }} >
          <Item sx={{ bgcolor: "#e8f6ff", height: "60px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <CustomImage src={profilepic} alt='profilepic' />
            <Typography variant="h6" component="h2" color='black'>Welcome Sample</Typography>
            <img src={person} alt='person' style={{ height: "100%", marginLeft: "auto" }} />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item sx={{ bgcolor: "#e8f6ff", height: "120px", display: "flex", flexDirection: "row",  alignItems: "center" }}>
            <img src={profile} alt='person' style={{ height: "100%", marginLeft: "4%" }} />
            <Box display="flex" flexDirection="column" alignItems="center"  marginLeft="27%" >
              <Typography variant="h5" component="h2" color='black'>Facing Issues?</Typography>
              <Button variant="contained" size='small'>Raise a Ticket </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Typography variant="h6" component="h2">Featured listings</Typography>
    
      <Stack >
        <Grid container spacing={2} >
          <Grid size={{ xs: 6, md: 4 }} >
            <CustomItem>
            <CustomImage1 src={adugodi} alt='person'  />
            </CustomItem>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} >
            <CustomItem >
            <CustomImage1 src={whitefield} alt='person'  />
            </CustomItem>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} >
            <CustomItem >
            <CustomImage1 src={mgroad} alt='person'  />
            </CustomItem>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} >
            <CustomItem >
            <CustomImage1 src={marthalli} alt='person'  />
            </CustomItem>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} >
            <CustomItem >
            <CustomImage1 src={queensroad} alt='person'  />
            </CustomItem>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} >
            <CustomItem >
            <CustomImage1 src={kudluroad} alt='person'  />
            </CustomItem>
          </Grid>

        </Grid>
      </Stack>

    </Stack>
  );
}
