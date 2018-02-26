export const create = (todo) => {
    return {
        type: "TODO_CREATE",
        payload: todo,
    }
}