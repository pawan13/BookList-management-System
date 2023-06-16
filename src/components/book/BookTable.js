import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { getAllBookAction } from '../../pages/books/BookAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BookTable = () => {
    const dispatch = useDispatch()
    const[displayList, setDisplayList] = useState([])
    //pull the books from the redux store 
    const {bookList} = useSelector((state) => state.books)
    useEffect(()=>{
        !bookList.length &&
        dispatch(getAllBookAction())
        setDisplayList(bookList)
    }, [bookList, dispatch])

    const handleOnSearch =(e)=>{
        const {value} = e.target;
        const filteredBook = bookList.filter((item)=>
        item.title.toLowerCase().includes(value.toLowerCase()))
        setDisplayList(filteredBook)
    }
  return (
    <div className="text-end">
        <Form.Control
        onChange={handleOnSearch} 
        className="user-control"
        placeholder='search book by name'></Form.Control>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Thumbnail</th>
        <th>Name</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
        {
            displayList.map((item, i)=>
            <tr key={i}>
            <td>{i + 1}</td>
            <td>
                <img src={item.url} alt="not found" />
            </td>
            <td> <h3>{item.name}</h3>
            <p>
                {" "}{item.title}-{item.year}</p>
            <p>{item.summary}</p>

             </td>
            <td>
                <Link to={`/edit-book/${item.id}`}>
                <Button variant='warning'>Edit</Button>
                </Link>
            </td>
          </tr>
            )
        }
     
    </tbody>
  </Table>
  </div>
  )
}

export default BookTable