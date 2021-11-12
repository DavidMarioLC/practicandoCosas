//replacing our initialState  hardcoding

// const initialState = [
//   { id: '01', value: 'note 1', done: false },
//   { id: '02', value: 'note 2', done: false },
// ];

export const noteReducer = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'notes/init':
      return action.payload.value;

    case 'note/addNote':
      return state.concat(action.payload.value);

    case 'note/toggleComplete':
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            done: !note.done,
          };
        }
        return note;
      });

    default:
      return state;
  }
};

export const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload.value;

    default:
      return state;
  }
};
