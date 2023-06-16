import React, { useEffect } from 'react'
import { UserLayout } from '../../components/layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'react-bootstrap'
import { getAllBurrowHistoryAction, updateBurrowHistoryAction } from './burrowAction'

const BurrowHistory = () => {
    const dispatch = useDispatch()
    const {burrowHistoryList} = useSelector((state)=> state.burrowHistories)
    const {admin} = useSelector((state)=>state.adminInfo)

    useEffect(()=>{
        !burrowHistoryList.length && dispatch(getAllBurrowHistoryAction(admin.uid))
    },[dispatch, burrowHistoryList, admin.uid]
    )

    const handleOnBookReturn=({id, bookId})=>{
        // burrow hist table: isReturn: true or false 
        const burrowUpdateObj ={
            id, 
            isReturn: true,
            availableFrom: Date.now(),
        }
        dispatch(updateBurrowHistoryAction(burrowUpdateObj))
        const bookUpdateObj = {
            id: bookId,
            isAvailable: true,
            availableFrom: Date.now()
        }
        dispatch(updateBurrowHistoryAction(bookUpdateObj))
    }
  return (
    <UserLayout>
        <h3>BurrowHistory</h3>
        <hr />
        <Table>
            <thead>
                <th>Thumbnail</th>
                <th>Book Details</th>
                <th>Burrowed At:</th>
                <th>Return Date</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    burrowHistoryList.map((item,id) =><tr key={id}>
                        <td>
                            <img src="" alt="" width={"100%"}/>
                        </td>
                        <td>
                            <h5>{item.title}</h5>
                        </td>
                        <td>
                            {new Date(item.burrowedAt).toLocaleDateString()}
                        </td>
                        <td>
                        {new Date(item.availableFrom).toLocaleDateString()}
                        </td>
                        <td>
                            {
                                item.isReturn ?
                                (<Button variant='dark' onClick={()=>handleOnBookReturn(item)} disabled>
                                Return Book
                            </Button>) :
                           ( <Button variant='dark' onClick={()=>handleOnBookReturn(item)}>
                            Return Book
                        </Button>)

                            }
                            
                        </td>
                    </tr>
                        )
                }
            </tbody>
        </Table>
    </UserLayout>
  )
}

export default BurrowHistory
