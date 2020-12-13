import './buoi5/screens/register.js'
export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id =doc.id
    return data
}
//lay du lieu tu get many document
export function getDataFromDocs(data) {
    // const docs = data.docs
    // const listRes = []
    // for (const item of docs) {
    //     listRes.push(getDataFromDoc(item))
    // }
    // return listRes
    return data.docs.map(getDataFromDoc)
}

//add du lieu
function addDocument(){
    const data ={

    }
    firebase.firestore().collection('users').add(data)
}
// addDocument()

//update document
function updateDocument() {
    const docId = 'A1yM39RXqmrKprIbNlhw'
    const data = {
        // name: 'updated',
        // address :'Hn'
        // phones: firebase.firestore.FieldValue.arrayUnion("0905")
        
        
    }
    firebase.firestore().collection('users').doc(docId).update(data)
    
}
// updateDocument()

// delete Document
function deleteDocument() {
    const docId = 'A1yM39RXqmrKprIbNlhw'
    firebase.firestore().collection('users').doc(docId).delete()
}
deleteDocument()

//save to local storage
export function saveToLocalStorage(key , value){
    localStorage.setItem(key,JSON.stringify(value))
}
export function getItemsLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}