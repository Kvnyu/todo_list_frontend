import React, { FC } from 'react';
// Components
import NoTodo from '../components/template/index/NoTodo';
import Template from '../components/template/Template';

const IndexPage: FC = () => {
  return (
    <Template pageName="My To-do List">
      <NoTodo />
    </Template>
  );
};

export default IndexPage;
