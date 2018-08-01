import todoAction from "../aciton/index"
const { ADD_TODO } = todoAction.todo

const todo = (state, aciton) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)]
    default:
      return
  }
}
