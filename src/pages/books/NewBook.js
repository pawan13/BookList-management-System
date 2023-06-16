import React, { useState } from 'react'
import { UserLayout } from '../../components/layout/UserLayout'
import { Button, Container, Form} from 'react-bootstrap'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { useDispatch } from 'react-redux'
import addNewBookAction from './BookAction'
import { Link } from 'react-router-dom'

const NewBook = () => {
const [form, setForm] = useState({})
const dispatch = useDispatch()

    const handleOnSubmit =(e)=>{
        e.preventDefault();
        dispatch(addNewBookAction(form))

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
        },
        {
          lable: "Author name",
          name: "name",
          type: "text",
          placeholder: "Smith",
          required: true,
        },
        {
          lable: "Published Year",
          name: "year",
          type: "number",
          placeholder: "2004",
        },
        {
          lable: "Imge url",
          name: "url",
          type: "url",
          placeholder: "http://",
          required: true,
        },
        {
          lable: "Summary",
          name: "summary",
          type: "text",
          placeholder: "SDFGHJKLWERTYUI",
          required: true,
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
              Add Book
            </Button>
          </p>
        </Form>
        </Container>
    </UserLayout>
  )
}

export default NewBook