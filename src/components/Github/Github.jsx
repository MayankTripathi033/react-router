import React, { useEffect } from 'react'
import Profile from '../Profile/Profile'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = React.useState([])
  // const getfollow = async () => {
  //   const res = await fetch('http://api.github.com/users/MayankTripathi033')
  //   const data = await res.json()
  //   console.log(data)
  //   setData(data)
  // }
  // useEffect(() => {
  //   getfollow();
  // }, [])
  
  return (
    <div className='bg-gray-700 text-white text-4xl mx-28 p-4 text-center'>
    <Profile avatar={data.avatar_url} followers={data.followers} following={data.following}/></div>
  )
}

export default Github
export const getGithubLoader = async() => {
  const res = await fetch('http://api.github.com/users/MayankTripathi033')
  return res.json();
}