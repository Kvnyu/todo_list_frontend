import React, { FC } from 'react';
// Modules
import Image from 'next/Image';
// MUI
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
// Images
import trees from '../../../public/images/trees.png';

const Footer: FC = () => {
  return (
    <Box
      maxWidth="lg"
      style={{ opacity: '15%', transform: 'translateX(-50%)' }}
      sx={{
        bottom: 0,
        height: '168px',
        left: '50%',
        position: 'absolute',
        right: 0,
        width: '100%',
      }}
    >
      <Container disableGutters>
        <Image
          priority
          alt="trees"
          layout="fill"
          objectFit="cover"
          src={trees}
        />
      </Container>
    </Box>
  );
};

export default Footer;
