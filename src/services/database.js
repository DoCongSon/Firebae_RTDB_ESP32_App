import { ref, child, get, set, onValue } from 'firebase/database';
import { database } from '../../firebaseConfig';

const getData = async (path) => {
  const dbRef = ref(database);
  let result;
  try {
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      result = snapshot.val();
    } else {
      console.log('No data available');
    }
  } catch (e) {
    // Handle errors
  }
  return result;
};

const setData = async (path, data) => {
  await set(ref(database, path), data);
};

const onListenData = (path, callback) => {
  const dbRef = ref(database, path);
  const unsubscribe = onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
  return unsubscribe;
};

export { getData, setData, onListenData };
