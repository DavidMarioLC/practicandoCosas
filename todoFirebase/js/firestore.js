import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  doc,
  updateDoc,
  where,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

//firestore
const db = getFirestore();

const NAME_COLLECTION = 'todoApp';

//insert firestore
export async function insert(userId, value) {
  try {
    const docRef = await addDoc(collection(db, NAME_COLLECTION), {
      id: nanoid(),
      text: value,
      completed: false,
      userId,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

export async function read(userId) {
  let todos = [];
  const myQuery = await query(
    collection(db, NAME_COLLECTION),
    where('userId', '==', userId)
  );

  const querySnapshot = await getDocs(myQuery);
  querySnapshot.forEach((doc) => {
    todos = [...todos, doc.data()];
  });

  return todos;
}

export async function update(id) {
  const query = doc(db, NAME_COLLECTION, id);

  // Set the "capital" field of the city 'DC'
  await updateDoc(query, {
    completed: !completed,
  });
}

export default {
  insert,
  read,
};
