import React, { FC } from 'react';
// Modules
import Image from 'next/Image';
// MUI
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Components
import Footer from '../components/Footer';
import Header from '../components/Header';
// Images
import smiley from '../../public/images/smiley.png';
import theme from '../styles/mui/theme';
const IndexPage: FC = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <Box mb={2} mt={3} pt={2}>
          <Grid container alignContent="center" alignItems="center" spacing={1}>
            <Grid item xs={12}>
              <Box
                marginLeft="auto"
                marginRight="auto"
                maxHeight={200}
                maxWidth={200}
                p={2}
              >
                <Image priority alt="smiley face" src={smiley} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography>Hooray! You’ve cleared your to-do list</Typography>
                <Typography>{`Tap '+' to create a new task`}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default IndexPage;
