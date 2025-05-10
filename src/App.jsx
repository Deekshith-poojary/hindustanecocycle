import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='bg-cover bg-center bg-green-600 '
    // style={{
    //     backgroundImage:
    //       "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnoZcYJEiD-Bpwvq9cA3HjS4r5xqFKBp-uQ&s')",
    //   }}
    >
    <div className="flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main className="bg-base-200">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div> 
    </div>
  ) : null
}

export default App
