import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';
import Parent from './components/parent/parent';
import Refs from "./components/Refs/Refs";
import Form from "./components/Form/Form";
import Animation from './components/Animation/Animation';
import Antd from './components/Antd/Antd';
import DidMount from './components/DidMount/DidMount';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<DidMount />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
