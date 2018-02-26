import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { create } from '../actions/createToDo';

class CreatingZone extends Component {
    render () {
        return (
            <div className="createZone">
                <input ref="CreateInput" type="text" />
                <button className="createToDo" 
                    onClick={() => {
                        this.props.create(this.refs.CreateInput.value); 
                        this.refs.CreateInput.value = ''}
                    }
                >Create ToDo</button>
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
    return bindActionCreators({create: create}, dispatch)
}



export default connect (mapStateToProps, matchDispatchToProps)(CreatingZone);




