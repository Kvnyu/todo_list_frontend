import Box from '@material-ui/core/Box';
import React, { FC, ReactNode } from 'react';
// Components
import Footer, { footerHeight } from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
  pageName: string;
}

const Template: FC<Props> = ({ children, pageName }) => {
  return (
    <Box minHeight="100vh" position="relative">
      <Box pb={footerHeight}>
        <Header pageName={pageName} />
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Template;
