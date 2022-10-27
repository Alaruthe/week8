// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import firebase from "../../lib/firebase";

export default async function handler(req, res) {
  try{
    const snapshot = await firebase.collection("tester").get();

    let output = [];

    snapshot.forEach(
      (doc) => {
        output.push(
          {
            id: doc.id,
            data: doc.data()
          }
        );
      }
    );

    console.log(output);
  } catch(error){
    console.error(err);
    res.status(500).end(error.message);
  }
}
