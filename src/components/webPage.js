import React from 'react';
import TodoList from '../containers/todos-list';
import Details from '../containers/details';
import Createtodozone from '../containers/createToDoZone'
import '../styles/style.css';

const WebPage = () => {
        return (
            <div className="mainPage">
                <h2 className="logo">ToDo's</h2>
                <Createtodozone />
                <hr />
                <TodoList />
                <h5 className="details">Details:</h5>
                <Details />
            </div>
        )
};

export default WebPage;