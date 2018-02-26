export const saveTitle = (todo) => {
    return {
        type: "TODO_SAVE_TITLE",
        payload: todo,
    }
}