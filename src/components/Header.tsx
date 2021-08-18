import React, { FC } from 'react';
// MUI
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
// FUI
import Typography from '../theme/overrides/Typography';
// Styles
import { Color } from '../theme/theme';

const Header: FC = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <Box
        bgcolor="background.paper"
        boxShadow={1}
        fontSize="24px"
        py={2}
        sx={{
          borderRadius: '0px 0px 8px 8px',
        }}
        textAlign="center"
      >
        <Typography customColor={Color.FRESH} variant="h4">
          My To-do List
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
