//read one
// getOneDocument();

import { getDataFromDoc , getDataFromDocs } from '../utils.js';
getManyDocument();
async function getOneDocument() {
    
    // promise
    // firebase.firestore().collection('user').doc('YtTq8fKqXMP9gLa0laNo').get()
    // .then((res) => {
    //     console.log(res)
    // } )
    // async await
    const res = await firebase.firestore().collection('users').doc('YtTq8fKqXMP9gLa0laNo').get()
    const user = res.data()
    user.id =res.id
    console.log(user)

}

//get many documents 
async function getManyDocument(){
    const res =await firebase.firestore().collection('users').get()
    // console.log(res.docs[0])
    const user = getDataFromDocs(res)
    console.log(user)
}