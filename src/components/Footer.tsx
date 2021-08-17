import React, { FC } from 'react';
// Modules
import Image from 'next/Image';
// MUI
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
// Images
import { makeStyles } from '@material-ui/styles';
import theme from '../styles/mui/theme';
import trees from '../../public/images/trees.png';

const useStyles = makeStyles({
  imageWrapper: {
    opacity: '15%',
    overflow: 'hidden',
  },
  transform: {
    transform: 'translateX(-50%)',
  },
});

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.transform}
      sx={{
        bottom: 0,
        height: '168px',
        left: '50%',
        maxWidth: theme.breakpoints.values.lg,
        position: 'fixed',
        right: 0,
      }}
    >
      <Container className={classes.imageWrapper} maxWidth="lg">
        <Image
          priority
          alt="trees"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
          src={trees}
        />
      </Container>
    </Box>
  );
};

export default Footer;
