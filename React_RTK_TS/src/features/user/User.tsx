import { useEffect } from 'react'
import { fetchUsers } from './userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const User = () => {
  const user = useAppSelector(state=>state.user)
  const dispatch=useAppDispatch()
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