export default function (state=null, action) {
    switch (action.type) {
        case "TODO_SELECTED": 
            return action.payload;
            break;
        case "TODO_EDIT_TITLE":
            let edit = action.payload.editTitle; 
            return {...action.payload, editTitle: !edit};
            break;
            case "TODO_EDIT_MORE":
            let edited = action.payload.editMore; 
            return {...action.payload, editMore: !edited};
            break;
        default: 
            return state;
    }
}