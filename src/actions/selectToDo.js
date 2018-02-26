export const select = (todo) => {
    return {
        type: "TODO_SELECTED",
        payload: todo
    }
};