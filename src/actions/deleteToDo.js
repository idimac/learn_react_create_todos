export const deleteToDo = (todo) => {
    return {
        type: "TODO_DELETE",
        payload: todo,
    }
}