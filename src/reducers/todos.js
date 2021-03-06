export default function (state=[], action) {
    switch (action.type) {
        case "TODO_CREATE": 
            function createId () {
                var id = 1;
                for(var i = 0; i < state.length; i++) {
                    if (id = state[i].id) {
                        id++;
                    } else if (!(id = state[i].id)) {
                        break;
                    }
                }
                return id;
            }
            return [...state, {text:action.payload, completed: false, id: createId() ,
            more: action.payload, editTitle: false, editMore: false}]
            break;
        case "TODO_DELETE": 
            return state.filter((obj)=>{
                return obj.id !== action.payload.id
            });
            break;
        case "TODO_SAVE_TITLE":
            let editedToDo = state[action.payload[0] - 1];
            editedToDo.text = action.payload[1];
            let changed = state;
            changed[action.payload[0] - 1] = editedToDo;
            return [...changed]
            break;
        case "TODO_SAVE_MORE":
            let editedToDoMore = state[action.payload[0] - 1];
            editedToDoMore.more = action.payload[1];
            let changedMore = state;
            changedMore[action.payload[0] - 1] = editedToDoMore;
            return [...changedMore]
            break;
            default: 
            return state;
        case "TODO_COMPLETE":
            let completedToDo = state[action.payload - 1];
            completedToDo.completed = !completedToDo.completed;
            let newState = state;
            newState[action.payload - 1] = completedToDo;
            console.log(newState);
            return [...newState];
            break;
    }
}