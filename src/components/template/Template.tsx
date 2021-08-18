import Box from '@material-ui/core/Box';
import React, { FC, ReactNode } from 'react';
// Components
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
  pageName: string;
}

const Template: FC<Props> = ({ children, pageName }) => {
  return (
    <>
      <Header pageName={pageName} />
      <Box mb="168px">{children}</Box>
      <Footer />
    </>
  );
};

export default Template;
