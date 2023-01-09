import React, { Fragment } from 'react'

//components
import InputTodo from './components/Input';
import ListTodo from './components/List';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  )
}

export default App;
