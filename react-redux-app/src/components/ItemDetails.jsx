import React from "react";
import { useParams } from "react-router-dom"

function ItemDetails(){
const {productId}=useParams()
const [itemDetail,setItemDetail]=React.useState([])

// console.log(productId)

React.useEffect(()=>{

    fetch(`http://localhost:30001/todos/${productId}`)
    .then((res)=>res.json())
    .then((res)=>setItemDetail(res))
    .catch((err)=>console.log(err))

},[productId])


// console.log(id)
    return(
        <>
        {

            <table>
                <thead>
                    <tr>
                <th>Title</th>
                {/* <th>Status</th> */}
                <th>Id</th>
                </tr>
                </thead>
                <tr>
                    <td>{itemDetail.title}</td>
                    {/* <td>{itemDetail.status}</td> */}
                    <td>{itemDetail.id}</td>
                </tr>
                <tbody>

                </tbody>
            </table>
              
            

        }
      
        </>
    )
}

export default ItemDetails