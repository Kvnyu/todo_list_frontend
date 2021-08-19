import React, { useState } from 'react';
// Modules
import { useMutation, useQuery } from '@apollo/client/react';
import { useRouter } from 'next/router';
// Hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Modules
import * as yup from 'yup';
// MUI
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
// Components
import Loading from '../../components/template/Loading';
import Template from '../../components/template/Template';
// FUI
import Typography from '../../theme/overrides/Typography';
// GraphQL
import DeleteTodoItemMutation, {
  DeleteTodoItemMutationData,
  DeleteTodoItemMutationVariables,
} from '../../lib/graphql/mutation/DeleteTodoItemMutation.graphql';
import TodoItemQuery, {
  TodoItemQueryData,
  TodoItemQueryVariables,
} from '../../lib/graphql/query/TodoItemQuery.graphql';
import UpdateTodoItemMutation, {
  UpdateTodoItemMutationData,
  UpdateTodoItemMutationVariables,
} from '../../lib/graphql/mutation/UpdateTodoItemMutation.graphql';
// Styles
import { Color } from '../../theme/theme';
// Lib
import TextField from '../../theme/overrides/TextField';
import TodoItemsQuery from '../../lib/graphql/query/TodoItemsQuery.graphql';
import paths from '../../lib/paths';

interface UpdateTodoFormData {
  description?: string;
  title: string;
}
const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
});

const UpdatePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery<
    TodoItemQueryData,
    TodoItemQueryVariables
  >(TodoItemQuery, {
    variables: {
      id: id as string,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateTodoFormData>({
    defaultValues: data?.TodoItem,
    resolver: yupResolver(validationSchema),
  });

  console.log(data);
  const [formState, setFormState] = useState<UpdateTodoFormData>({
    description: data?.TodoItem?.description,
    title: data?.TodoItem?.title,
  });
  console.log(formState);

  const [updateTodo] = useMutation<
    UpdateTodoItemMutationData,
    UpdateTodoItemMutationVariables
  >(UpdateTodoItemMutation, {
    refetchQueries: [{ query: TodoItemsQuery }],
  });

  const [deleteTodo] = useMutation<
    DeleteTodoItemMutationData,
    DeleteTodoItemMutationVariables
  >(DeleteTodoItemMutation, {
    refetchQueries: [{ query: TodoItemsQuery }],
  });

  const onSubmitSave = async (data: UpdateTodoFormData) => {
    console.log(data);
    updateTodo({
      variables: {
        input: {
          id: id as string,
          item: {
            description: data.description,
            title: data.title,
          },
        },
      },
    })
      .then(() => {
        router.push(paths.home.href);
      })
      .catch((error) => {
        // TODO: Add modal for errors
        console.log(error);
      });
  };

  const onSubmitRemove = async () => {
    deleteTodo({
      variables: {
        id: id as string,
      },
    })
      .then(() => {
        router.push(paths.home.href);
      })
      .catch((error) => console.log(error));
  };
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (data.TodoItem) {
      return (
        <Container disableGutters maxWidth="md">
          <Box bgcolor={Color.WHITE} borderRadius="8px" height="80vh" mt={4}>
            <Box display="flex" justifyContent="flex-end" p={2}>
              <IconButton href={paths.home.href}>
                <CloseIcon />
              </IconButton>
            </Box>
            <form onSubmit={handleSubmit(onSubmitSave)}>
              <Container maxWidth="sm">
                <Box p={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography customColor={Color.JET}>
                        Give your task a title:
                      </Typography>
                      {errors?.title && (
                        <Typography
                          customColor={Color.WARNING}
                        >{`Error: ${errors?.title?.message}`}</Typography>
                      )}

                      <TextField
                        fullWidth
                        error={!!errors?.title ?? false}
                        value={formState?.title}
                        {...register('title')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography customColor={Color.JET}>
                        About this task:
                      </Typography>
                      <TextField
                        fullWidth
                        multiline
                        maxRows={14}
                        minRows={10}
                        value={formState?.description}
                        {...register('description')}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Container>
              <Container maxWidth="xs">
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <Button
                      fullWidth
                      color="primary"
                      style={{
                        backgroundColor: Color.WHITE,
                        textTransform: 'none',
                      }}
                      variant="outlined"
                      onClick={onSubmitRemove}
                    >
                      <Typography customColor={Color.FRESH}>
                        Remove Task
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      fullWidth
                      style={{
                        backgroundColor: Color.FRESH,
                        textTransform: 'none',
                      }}
                      type="submit"
                      variant="contained"
                    >
                      <Typography customColor={Color.WHITE}>
                        Save Changes
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Box p={2}></Box>
              </Container>
            </form>
          </Box>
        </Container>
      );
    }
  };
  return <Template pageName={'Edit Task'}>{renderContent()}</Template>;
};
export default UpdatePage;
