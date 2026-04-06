import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Register from './components/register'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
     <>
      {/* <Login></Login> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </Router> */}
      {isLogin ? (
        <Login switchToRegister = {() => setIsLogin(false)}></Login>
      ) : (
        <Register switchToLogin = {() => setIsLogin(true)}></Register>
      )}
     </>
  )
}

export default App
