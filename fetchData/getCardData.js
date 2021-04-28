import firebase from "../firebase/clientApp";

export const getCard = async () => {
  const db = firebase.firestore();
  const data = [];
  await db
    .collection("card")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
    });
  return data;
};
