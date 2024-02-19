import React from 'react'
import Profile from '../Profile/Profile'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();
  
  return (
    <div className='bg-gray-700 text-white text-4xl mx-28 p-4 text-center'>
    <Profile avatar={data.avatar_url} followers={data.followers} following={data.following}/></div>
  )
}

export default Github
export const getGithubLoader = async() => {
  const res = await fetch("https://api.github.com/users/MayankTripathi033")
  return res.json();
}