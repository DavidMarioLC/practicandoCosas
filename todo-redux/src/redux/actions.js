import { getAll, createNewNote } from '../services/notes';

// actionCreators
export const initStoreNotes = () => async (dispatch) => {
  const notes = await getAll();
  dispatch({
    type: 'notes/init',
    payload: {
      value: notes,
    },
  });
};

export const createNote = (note) => async (dispatch) => {
  const newNote = await createNewNote(note.value);

  dispatch({
    type: 'note/addNote',
    payload: { value: newNote },
  });
};

export const toggleCompleted = (id) => ({
  type: 'note/toggleComplete',
  payload: { id },
});

export const filterChange = (filter) => ({
  type: 'filter/setFilter',
  payload: {
    value: filter,
  },
});
