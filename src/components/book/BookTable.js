import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'

const BookTable = () => {
  return (
    <div className="text-end">
        <Form.Control className="control"></Form.Control>
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
      <tr>
        <td>1</td>
        <td>
            <img src="https://tse3.mm.bing.net/th?id=OIP._p1DcODotfieRvfvNY2uygHaD4&pid=Api&P=0&h=180" alt="image not found" />
        </td>
        <td> <h3>JavaScript master - Pawan</h3>
        <p>written by me</p>
         </td>
        <td>
            <Button variant='warning'>Edit</Button>
        </td>
      </tr>
    </tbody>
  </Table>
  </div>
  )
}

export default BookTable