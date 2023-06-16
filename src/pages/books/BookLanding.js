import React from 'react'
import { DefaultLayout } from '../../components/layout/DefaultLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addNewBurrowAction } from '../burrowHistory/burrowAction'

const BookLanding = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const fourteenDaysInMS= 14*24*60*60*1000;

    const dispatch = useDispatch()

    const {bookList} = useSelector((state)=>state.books)
    const {admin} = useSelector((state)=>state.adminInfo)

    const selectedBook = bookList.find((item)=> item.id === id)

    if(!selectedBook) return navigate("/")
    const {bookId, title, name, year, url, summary, isAvailable, availableFrom} = selectedBook;

    const handleOnBurrow =()=>{
        const obj ={
            title,
            url,
            bookId,
            userid: admin.uid,
            userName: admin.fName,
            burrowAt: Date.now(),
            availableFrom: Date.now() + fourteenDaysInMS,
        }
        dispatch(addNewBurrowAction(obj))
    }
  return (
    <DefaultLayout>
        <Container className='mt-3'>
            <Row>
            <Link to="/">
            <Button variant="secondary">
                &lt; Back
            </Button>
        </Link>
            </Row>
        </Container>

        <Row className='g-2'>
            <Col md={6}>
            <img src={url} alt="" width="100%"/>
            </Col>
            <Col md={6}>
            <h1>{title}</h1>
            <p>ratings</p>
            <p>{name}-{year}</p>
            <p>{summary}</p>
            <p>
                { 
                (!admin?.uid ) ? 
                <Link to="/signin">
                (<Button variant='dark'>Login to burrow</Button>)
                </Link>
                    :isAvailable ? (<Button variant='dark'onClick={handleOnBurrow}>Burrow</Button>) :
                    (
                        <Button variant='seconadry' disabled>Available From : {new Date(availableFrom).toDateString()}</Button>
                      
                    )
                }
                
            </p>
            </Col>
        </Row>

        <Row>
            <Col className='border rounded mt-5'>
                Ratings
            </Col>
        </Row>
        
        </DefaultLayout>
  )
}

export default BookLanding
