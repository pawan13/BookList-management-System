import { addDoc, collection, doc, getDoc, getDocs, query, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { db } from '../../config/firebase-config'
import { setBooks, setSelectedBook } from './bookSlice'

const addNewBookAction = (bookObj) => async(dispatch)=> {
 try {
    //add new document in the database
    const docRefPending =  addDoc(collection(db, "books"), bookObj)
    //show the spinning loader 
    toast.promise(docRefPending, {
        pending: "please wait ..."
    })
    const docRef = await docRefPending

    if(docRef?.id){
        toast.success("New book has been added sucessfully")
        dispatch(getAllBookAction())
    }
    
 } catch (error) {
    console.log(error)
    toast.error(error.message)
 }
}
export const updateBookAction = ({id, ...rest}) => async(dispatch)=> {
 try {
    console.log(id, rest)
    //add new document in the database
   await setDoc(doc(db, "books"), rest, {merge: true})
   
    
        toast.success("The book has been updated sucessfully")
        dispatch(getAllBookAction())
    
    
 } catch (error) {
    console.log(error)
    toast.error(error.message)
 }
}

export const getAllBookAction = () => async dispatch =>{
    try{
          const q = query(collection(db, 'books'))
          const querySnapShot = await getDocs(q)

        let book = []
          querySnapShot.forEach((doc)=>{
        const {id} = doc

        const data = doc.data()
        book.push({...data, id})

          })
          dispatch(setBooks(book))
    }
    catch(error){
        console.log(error)
    }
}
export const getBookAction = (id) => async dispatch =>{
    try{
          
          const bookSnapShot = await getDoc(doc(db, "books", id))
        if(bookSnapShot.exists()){
            //extract the bookm data and send to the store 
            const data = bookSnapShot.data()

            dispatch(setSelectedBook({...data, id}))
        }

       
    }
    catch(error){
        console.log(error)
    }
}


export default addNewBookAction