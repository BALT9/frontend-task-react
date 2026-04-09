import { Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './services/ProtectedRoute'
import { TaskProvider } from './context/TaskContext'
import { UserProvider } from './context/UserContext'
// import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <TaskProvider >
          <UserProvider>
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
            </Routes>
          </UserProvider>
        </TaskProvider>
      </AuthProvider>
    </>
  )
}

export default App
