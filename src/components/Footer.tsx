import React, { FC } from 'react';
// Modules
import Image from 'next/Image';
// MUI
import Container from '@material-ui/core/Container';
// Images
import { makeStyles } from '@material-ui/styles';
import trees from '../../public/images/trees.png';

const useStyles = makeStyles({
  imageWrapper: {
    opacity: '15%',
    overflow: 'hidden',
  },
});

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.imageWrapper}>
      <Image priority alt="trees" layout="intrinsic" src={trees} />
    </Container>
  );
};

export default Footer;
