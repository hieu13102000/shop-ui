import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import ListMembership from './Components/Membership/ListMembership'
import Products from './Components/Products/ListProduct'
import ProtectedLayout from './Components/ProtectedLayout'
export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedLayout />}>
            <Route path='listProducts' element={<Products/>}/>
            <Route path='listMembership' element={<ListMembership/>}/>
       </Route>
    </Routes>
  )
}
