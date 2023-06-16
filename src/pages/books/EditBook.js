import React, { useEffect, useState } from 'react'
import { UserLayout } from '../../components/layout/UserLayout'
import { Button, Container, Form} from 'react-bootstrap'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBookAction, getBookAction, updateBookAction } from './BookAction'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase-config'

const EditBook = () => {
  const {id} = useParams()
const [form, setForm] = useState({})
const dispatch = useDispatch()
const navigate = useNavigate()

const {selectedBook} = useSelector((state)=> state.books)

useEffect(() => {
  // call action to fetch selected book based on id
 selectedBook.id !== id && dispatch(getBookAction(id))
!form.id && setForm(selectedBook)
 
}, [dispatch, id, selectedBook, form.id])

    const handleOnDelete =async()=>{
      try {
        if(window.confirm("Are you sure you want to delete this book?")){
          await deleteDoc(doc(db, 'books', id))
          toast.success("Your book has been deleted.")
          dispatch(getAllBookAction())
            navigate("/books")
        }
        
      } catch (error) {
        toast.error(error.message)
      }
    }
    const handleOnSubmit =(e)=>{
        e.preventDefault();
        dispatch(updateBookAction(form))

    }
    const handleOnChange = (e) => {
      const { name, value } = e.target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };

    const inputs = [
        {
          lable: "Book Title",
          name: "title",
          type: "text",
          placeholder: "JavaScript",
          required: true,
          value:form.title,
        },
        {
          lable: "Author name",
          name: "name",
          type: "text",
          placeholder: "Smith",
          required: true,
          value:form.name,
        },
        {
          lable: "Published Year",
          name: "year",
          type: "number",
          placeholder: "2004",
          value:form.year,
        },
        {
          lable: "Imge url",
          name: "url",
          type: "url",
          placeholder: "http://",
          required: true,
          value:form.url,
        },
        {
          lable: "Summary",
          name: "summary",
          type: "text",
          placeholder: "SDFGHJKLWERTYUI",
          required: true,
          value:form.summary
        }
      ];
    
  return (
    <UserLayout>
      <h3 className="mt-2 ms-2">Books</h3>
      <Container>
      <Link to="/books">
      <Button
      varient='secondary'
      >&lt; Back</Button>
      </Link>
      <hr />
      <Form onSubmit={handleOnSubmit}>
          <h1>New Books</h1>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput
             {...item} onChange={handleOnChange} />
          ))}

          <p className="d-grid mt-3">
            <Button variant="dark" type="submit">
              Update Book
            </Button>
          </p>
        </Form>
        <Button variant="danger" type="submit" onClick={handleOnDelete}>
              Delete Book
            </Button>
        </Container>
    </UserLayout>
  )
}

export default EditBook