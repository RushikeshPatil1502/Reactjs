import React, { useEffect, useState } from 'react'
import UsersList from './UsersList';
import Button from '../02-List-Practice/Button';

function Users() {
    const [userslist, setusersList] = useState([])
    const [pendingResult,setPendingResult] = useState(false)

    async function fetchAllUsers(){
       try{
        setPendingResult(true)
        const apiResponse = await fetch('https://dummyjson.com/users' , {
            method: 'GET'
        })
        const data = await apiResponse.json()
        console.log(data);

        if(data?.users) {
            setusersList(data?.users)
            setPendingResult(false)
        } else{
            setusersList([])
            setPendingResult(false)
        }
       }catch(error){
            console.log(error);
       }
    }

    console.log(userslist);

    // function handleFetchUsers(){
    //     fetchAllUsers()
    // }

    useEffect(()=>{
        fetchAllUsers()
    },[])

    

  return (
    <div>
        <h1 className='mt-10 text-4xl'>All Users List</h1>
         
        <Button buttonDescription='Fetch All Users' clickFunction={fetchAllUsers} />
        <div className=' px-5 py-5 flex flex-wrap gap-4 bg-green-300'>
            {
                userslist && userslist.length > 0 ? 
                userslist.filter((users, index) => 
                    users.id < 5
                ).map(
                    ( users => 
                        <UsersList key={users.id} name={users.firstName} age={users.age} />
                    )
                ) : pendingResult ? <h1>Fetching users! wait 🤗 for a moment</h1> : <h1></h1>
    
            }
        </div>
    </div>
  )
}

export default Users