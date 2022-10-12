import { db } from "../firebase";

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";

const addTodo = async({ userId, mytitle, mydescription, mystatus }) => {
  try {
    await addDoc(
      collection(db, "todo"),
      {
        user: userId,
        title: mytitle,
        description: mydescription,
        status: mystatus,
        createdAt: new Date().getTime()
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const toggleTodoStatus = async({docId, mystatus}) => {
  try{
    const todoRef = doc(db, "todo", docId);

    await updateDoc( 
      todoRef, 
      {
        status: mystatus
      }
    )
  }catch(err){
    console.log(err);
  }
}

const deleteTodo = async ({docId}) => {
  try {
    const todoRef = doc(db, "todo", docId);
    await deletedDoc(todoRef);
  } catch(err){
    console.log(err);
  }
}

export { addTodo, toggleTodoStatus, deleteTodo};