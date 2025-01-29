import React, { useEffect, useState } from 'react'
import UsersList from './UsersList';

function Users() {
    const [userslist, setusersList] = useState([])

    async function fetchAllUsers(){
       try{
        const apiResponse = await fetch('https://dummyjson.com/users' , {
            method: 'GET'
        })
        const data = await apiResponse.json()
        console.log(data);

        if(data?.users) {
            setusersList(data?.users)
        } else{
            setusersList([])
        }
       }catch(error){
            console.log(error);
       }
    }

    console.log(userslist);


    useEffect(()=>{
        fetchAllUsers()
    },[])
  return (
    <div>
        <h1 className='mt-10 text-4xl'>All Users List</h1>

        <div className=' px-5 py-5 flex flex-wrap gap-4 bg-green-300'>
            {
                userslist && userslist.length > 0 ? 
                userslist.filter((users, index) => 
                    users.id < 5
                ).map(
                    ( users => 
                        <UsersList key={users.id} name={users.firstName} age={users.age} />
                    )
                ) : <h1>No users Found</h1>
            }
        </div>
    </div>
  )
}

export default Users