import React, { FC } from 'react';
// MUI
import Box from '@material-ui/core/Box';

export const footerHeight = '136px';

const Footer: FC = () => {
  return (
    <Box
      maxWidth="lg"
      style={{
        backgroundImage: `url(/images/trees.png)`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-x',
        bottom: 0,
        display: 'block',
        height: footerHeight,
        left: 0,
        opacity: '15%',
        position: 'absolute',
        width: '100%',
      }}
    />
  );
};

export default Footer;
