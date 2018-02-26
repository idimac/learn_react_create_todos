export const completeToDo = (todo) => {
    return {
        type: "TODO_COMPLETE",
        payload: todo,
    }
}