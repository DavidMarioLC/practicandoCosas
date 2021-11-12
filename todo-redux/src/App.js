import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NewNote from './components/NewNote';
import ListNotes from './components/ListNotes';
import FilterNotes from './components/FilterNotes';
import { initStoreNotes } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initStoreNotes());
  }, [dispatch]);

  return (
    <>
      <NewNote />
      <FilterNotes />
      <ListNotes />
    </>
  );
}

export default App;
