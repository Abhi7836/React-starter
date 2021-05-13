import React,{useState,useEffect}from 'react'
import axios from 'axios'

function HomeScreen({match}) {
    const [message,setMessage]= useState("")
    useEffect(()=>{
     const fetchProducts = async()=>{
         const {data} = await axios.get('/api')
          setMessage(data)
     }
     fetchProducts()
    },[])

    return (
        <>
         <h1>hello from front end</h1>
         <h1>{message}</h1>
        </>
    )
}

export default HomeScreen
