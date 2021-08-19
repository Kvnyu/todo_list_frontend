import React from 'react';
// Modules
import { NextPage } from 'next';
// Components
import Loading from '../components/template/Loading';
import NoTodo from '../components/index/NoTodo';
import Template from '../components/template/Template';
import TodoListController from '../components/index/TodoListController';
// GraphQL
import { useQuery } from '@apollo/client/react';
import TodoItemsQuery from '../lib/graphql/query/TodoItemsQuery.graphql';
// Types
import { Item } from '../lib/types/TodoTypes';

// TODO: Move these props out

interface Props {
  items: Item[];
}

// TODO: Move these out
const IndexPage: NextPage<Props> = () => {
  const { loading, error, data } = useQuery(TodoItemsQuery);
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (data && data.todoItems && data.todoItems.length !== 0) {
      return <TodoListController items={data.todoItems} />;
    }

    return <NoTodo />;
  };

  return <Template pageName="My To-do List">{renderContent}</Template>;
};
export default IndexPage;
