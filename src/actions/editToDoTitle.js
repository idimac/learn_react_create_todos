export const editTitle = (todo) => {
    return {
        type: "TODO_EDIT_TITLE",
        payload: todo,
    }
}