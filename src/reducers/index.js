import {combineReducers} from 'redux';
import todosList from './todos';
import activeToDo from './activeToDo';

const allRedusers = combineReducers ({
    todos: todosList,
    activeToDo: activeToDo,
});

export default allRedusers;