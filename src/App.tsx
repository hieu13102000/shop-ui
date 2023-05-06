import { Route, Routes } from 'react-router-dom'
import Login from './Page/Login'
import ListMembership from './Page/Membership/ListMembership'
import Products from './Page/Products/ListProduct'
import ProtectedLayout from './Page/ProtectedLayout'
import Dashboard from './Page/Dashboard'
export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedLayout />}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='listProducts' element={<Products/>}/>
            <Route path='listMembership' element={<ListMembership/>}/>
       </Route>
    </Routes>
  )
}
