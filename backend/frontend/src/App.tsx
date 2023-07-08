import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/Account'



function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/account/login' element={<Login />} />
          <Route path='/account/signup' element={<SignUp />} />
          <Route path='/account/profile' element={<Account />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='/product/:id' element={<Details />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
