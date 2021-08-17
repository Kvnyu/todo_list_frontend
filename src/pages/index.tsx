import React, { FC } from 'react';
// Modules
import Image from 'next/Image';
// Components
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
// Images
import smiley from '../../public/images/smiley.png';

const useStyles = makeStyles({
  imageWrapper: {
    maxHeight: '64px',
    maxWidth: '64px',
  },
});

const IndexPage: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item>
            <div className={classes.imageWrapper}>
              <Image
                priority
                alt="smiley face"
                layout="responsive"
                src={smiley}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default IndexPage;
