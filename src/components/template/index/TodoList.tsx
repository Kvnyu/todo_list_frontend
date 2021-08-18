import React, { FC } from 'react';
// MUI
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
// Types
import { Item } from '../../../pages';
import { Shadow } from '../../../theme/theme';
import Grid from '@material-ui/core/Grid';
import Typography from '../../../theme/overrides/Typography';

interface Props {
  items: Item[];
}

const TodoList: FC<Props> = ({ items }) => {
  return (
    <Container maxWidth="md">
      <Box flex="auto" mt={4}>
        <Grid container spacing={2}>
          {items.map((item: Item) => {
            return (
              <Grid key={item.id} item xs={12}>
                <Box boxShadow={Shadow.DEPTH_01}>
                  <Grid container>
                    <Grid item xs={2}>
                      Checkbox
                    </Grid>
                    <Grid item xs={10}>
                      <Typography>{item.title}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};
export default TodoList;
