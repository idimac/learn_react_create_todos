import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; //Создает различные действия
import { connect } from 'react-redux';
import { select } from '../actions/selectToDo';
import { saveTitle } from '../actions/saveToDoTitle'; //For updating selected TodoTitle window

class TodosList extends Component {
    showToDoS() {
        return this.props.todos.map((todo) => {
            return (
                <li className="liItem" onClick={()=>this.props.select(todo)}
                key={todo.id}>{todo.id} - {todo.text}</li>
            )
        })
    };
    render () {
        return (
            <div className="listTodos">
                <ul>
                    {this.showToDoS()}
                </ul>
            </div>
        );
    };
};
function mapStateToProps (state) {
    return {
        todos: state.todos
    }
};
function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select, saveTitle: saveTitle}, dispatch)
}



export default connect (mapStateToProps, matchDispatchToProps)(TodosList);