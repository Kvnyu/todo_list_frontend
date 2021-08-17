import React, { FC } from 'react';
// MUI
import { Box, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const Header: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        bgcolor="background.paper"
        boxShadow={1}
        sx={{
          borderRadius: '0px 0px 8px 8px',
        }}
      >
        <Grid container justifyContent="center">
          <Grid item>
            <Typography color="primary" variant="h2">
              My To-do List
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Header;
