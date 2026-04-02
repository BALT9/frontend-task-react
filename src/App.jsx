import { Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import { AuthProvider } from './context/AuthContext'
// import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
