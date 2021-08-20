const CREATE = 'todos/CREATE';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let nextId = 0;
export const create = (contents) => ({
  type: CREATE,
  todo: { id: nextId++, contents: contents, enable: false },
});
export const toggle = (id) => ({ type: TOGGLE, id: id });
export const remove = (id) => ({ type: REMOVE, id: id });

const initialState = [];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, enable: !todo.enable } : todo
      );
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
