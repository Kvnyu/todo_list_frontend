import React, { FC } from 'react';
// MUI
import { Box, Grid, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
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
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography color="primary" variant="h3">
              My To-do List
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Header;
