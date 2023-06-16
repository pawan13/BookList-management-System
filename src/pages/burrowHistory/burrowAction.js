import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { updateBookAction } from "../books/BookAction"
import { db } from "../../config/firebase-config"
import { toast } from "react-toastify"
import { setburrowHistorys } from "./burrowSlice"

export const addNewBurrowAction = (transactionObj) => async(dispatch)=> {
    try {
       //add new document in the database
       const docRefPending =  addDoc(collection(db, "burrow-history"), transactionObj)
       //show the spinning loader 
       toast.promise(docRefPending, {
           pending: "please wait ..."
       })
       const docRef = await docRefPending
   
       if(docRef?.id){
           toast.success("New book has been burrowed sucessfully")
           //dispatch(getAllBookAction())
           //update book avaliable state
           dispatch(updateBookAction({
            id: transactionObj.bookId,
            isAvailable: false,
            avaibleFrom: transactionObj.avaibleFrom,
           }))
           dispatch(getAllBurrowHistoryAction(transactionObj.userId))
           
       }
       
    } catch (error) {
       console.log(error)
       toast.error(error.message)
    }
   }

   export const getAllBurrowHistoryAction = (userId) => async dispatch =>{
    try{
          const q = query(collection(db, 'burrow-histroy'), where('userId', "==", userId))
          const querySnapShot = await getDocs(q)

        let history = []
          querySnapShot.forEach((doc)=>{
        const {id} = doc

        const data = doc.data()
        history.push({...data, id})

          })
          history.length &&
          dispatch(setburrowHistorys(history))
    }
    catch(error){
        console.log(error)
    }
}

export const updateBurrowHistoryAction = ({id, ...rest}) => async(dispatch)=> {
    try {
       console.log(id, rest)
       //add new document in the database
      await setDoc(doc(db, "burrow-history", id), rest, {merge: true})
      
       
           toast.success("The book has been returned sucessfully")
           dispatch(getAllBurrowHistoryAction())
       // update the book table

    } catch (error) {
       console.log(error)
       toast.error(error.message)
    }
   }