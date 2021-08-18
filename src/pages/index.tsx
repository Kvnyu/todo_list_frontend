import React from 'react';
// Modules
import { NextPage } from 'next';
// Components
import NoTodo from '../components/template/index/NoTodo';
import Template from '../components/template/Template';
// GraphQL
import { useQuery } from '@apollo/client/react';
import TodoList from '../components/template/index/TodoList';
import gql from 'graphql-tag';

// TODO: Move these props out
export interface Item {
  completed: boolean;
  description?: string;
  id: string;
  title: string;
}
interface Props {
  items: Item[];
}

// TODO: Move these out
const TodoItemsQuery = gql`
  query TodoItemsQuery {
    todoItems {
      id

      title
      description
      completed
    }
  }
`;

const IndexPage: NextPage<Props> = () => {
  const { loading, error, data } = useQuery(TodoItemsQuery);
  console.log(data);
  console;

  if (data && data.todoItems && data.todoItems.length !== 0) {
    return (
      <Template pageName="My To-do List">
        <TodoList items={data.todoItems} />
      </Template>
    );
  }

  return (
    <Template pageName="My To-do List">
      <NoTodo />
    </Template>
  );
};
export default IndexPage;
