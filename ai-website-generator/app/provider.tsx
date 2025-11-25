"use client"

{/* This file to store values to db */}
import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    //get current user from clerk - CALL CreateNewUser function only when user is available
    const { user } = useUser();
    const [userDetail,setUserDetail]=useState<any>();
    useEffect(()=>{
      user && CreateNewUser();
    }, [user]);

    //function to create new user in db
    const CreateNewUser=async ()=>{
      //call api to create user in db
        const result = await axios.post('/api/users',{});
        console.log("New User Created",result.data);
        setUserDetail(result.data?.user);
    }
  return (
    <div>
      <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
      {children}
      </UserDetailContext.Provider>
    </div>
  )
}

export default Provider
