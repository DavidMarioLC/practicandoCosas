import axios from 'axios';

const URL_API = 'http://localhost:3001/notes';

export const getAll = async () => {
  const { data } = await axios.get(URL_API);

  return data;
};

export const createNewNote = async (content) => {
  const note = { content, done: false };
  const { data } = await axios.post(URL_API, note);

  return data;
};
