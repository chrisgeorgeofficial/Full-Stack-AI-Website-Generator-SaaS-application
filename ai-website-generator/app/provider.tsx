"use client"

{/* This file to store values to db */}
import React, { use, useEffect } from 'react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const {user} useUser();
    useEffect(()=>{
      user && CreateNewUser();
    }, [user]);

    const CreateNewUser=async ()=>{
        const result = await axios.post('/api/users',{});
        console.log("New User Created",result.data);
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
