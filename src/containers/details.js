import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteToDo } from '../actions/deleteToDo';
import { select } from '../actions/selectToDo'; 
import { editTitle } from '../actions/editToDoTitle';
import { saveTitle } from '../actions/saveToDoTitle';
import { editMore } from '../actions/editToDoMoreInf';
import { saveMore } from '../actions/saveToDoMore';
import { completeToDo } from '../actions/completeToDo';

class Details extends Component {
    editTextToDo () {
       if(this.props.todo.editTitle) {
            return (
                <input onKeyPress={(e) => {if(e.key === "Enter"){ 
                    this.props.saveTitle([this.props.todo.id, this.refs.inputTitle.value]);
                    this.props.editTitle(this.props.todo);
                    this.props.select(null);
                }}} ref="inputTitle" type="text" defaultValue={this.props.todo.text} />
            );
        } else {
            return (
            <h2>{this.props.todo.text} <button onClick={() => {
                    this.props.completeToDo(this.props.todo.id)}
                }>Completed</button></h2>
            )
        }
    };
    editTextToDoButton () {
        if(this.props.todo.editTitle) {
            return (
                <button onClick={()=> {
                    this.props.saveTitle([this.props.todo.id, this.refs.inputTitle.value]);
                    this.props.editTitle(this.props.todo);
                    this.props.select(null)
                    }
                }>save</button>
            );
        } else {
            return (
                <button onClick={()=>
                    this.props.editTitle(this.props.todo)
                }>edit name</button>
            )
        }
    };
    editMoreToDo () {
        if(this.props.todo.editMore) {
            return (
                <input onKeyPress={(e) => {if(e.key === "Enter"){ 
                    this.props.saveMore([this.props.todo.id, this.refs.inputMore.value]);
                    this.props.editMore(this.props.todo);
                    this.props.select(null);
                }}} ref="inputMore" type="text" defaultValue={this.props.todo.more} />
            );
        } else {
            return (
            <p>{this.props.todo.more}</p>
            )
        }
    };
    editMoreToDoButton () {
        if(this.props.todo.editMore) {
            return (
                <button onClick={()=> {
                    this.props.saveMore([this.props.todo.id, this.refs.inputMore.value]);
                    this.props.editMore(this.props.todo);
                    this.props.select(null)
                    }
                }>save more...</button>
            );
        } else {
            return (
                <button onClick={()=>
                    {this.props.editMore(this.props.todo)}
                }>edit details</button> 
            )
        }
    };
    render () {
        if (!this.props.todo) {
            return (<p className="moreDetails"> Choose some todo...</p>);
        };
        return  (
            <div className="moreDetails">
                { this.editTextToDo() }
                <button onClick={()=>{
                    this.props.deleteToDo(this.props.todo) //delete todo
                    this.props.select(null) //reset details list
                }}>delete</button>{ this.editTextToDoButton() }
                <hr />
                <p>more information about this task</p> {this.editMoreToDoButton()}
                {this.editMoreToDo()}
            </div>
        )
    }
};

function mapStateToProps (state) {
    return {
        todo: state.activeToDo,
    };
}
function matchDispatchToProps (dispatch) {
    return bindActionCreators ({deleteToDo: deleteToDo, select: select, editTitle: editTitle,
         saveTitle: saveTitle, editMore: editMore, saveMore: saveMore, completeToDo: completeToDo}, dispatch)
};

export default connect (mapStateToProps, matchDispatchToProps)(Details);