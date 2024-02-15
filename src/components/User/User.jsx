import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams();
  return (
    <div className='bg-gray-700 text-3xl text-white p-4 text-center mx-28'>User: {userid}</div>
  )
}

export default User