import React from 'react'
import { useEffect } from 'react'
import { fetchUsers } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'

const User = () => {
  const user = useSelector(state=>state.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])
  return (
    <>
    <div>List of users</div>
    <div>
      {user.loading&&<div>Loading....</div>}
      {user.error&&<div>{user.error}</div>}
      {user.data.length&&
        user.data.map((user)=>(
          <div>
          <li key={user.id}>{user.name}</li>
          </div>
        ))
      }
    </div>
    <br />
    </>
  )
}

export default User