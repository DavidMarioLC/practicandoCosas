import { useDispatch } from 'react-redux';
import { createNote } from '../redux/actions';
import { createNewNote } from '../services/notes';
const NewNote = () => {
  const dispatch = useDispatch();

  const saveNote = async (e) => {
    e.preventDefault();

    const { note } = e.target;
    dispatch(createNote(note.value));

    note.value = '';
  };

  return (
    <form onSubmit={saveNote}>
      <input placeholder='add note' name='note' />
      <button>Save</button>
    </form>
  );
};

export default NewNote;
