import { useDispatch, useSelector } from 'react-redux';
import { toggleCompleted } from '../redux/actions';

const ListNotes = () => {
  const notes = useSelector((state) => {
    return state.filter === 'ALL'
      ? state.notes
      : state.filter === 'COMPLETED'
      ? state.notes.filter((note) => note.done)
      : state.filter === 'INCOMPLETE'
      ? state.notes.filter((note) => !note.done)
      : state.notes;
  });

  const dispatch = useDispatch();

  const toggleComplete = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx} onClick={() => toggleComplete(note.id)}>
            {note.content}-{note.done ? 'completed ✅' : 'incomplete 🚩'}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListNotes;
