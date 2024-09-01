import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'



import Navbar from './components/Navbar'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import Cart from './components/Cart'
import CheckOut from './pages/CheckOut'
import SignInPopUp from './components/SignInPopUp/SignInPopUp'


function App() {
  
  const [signIn, setSignIn] = useState(false);

  return (
    <>
        {signIn && <SignInPopUp setSignIn={setSignIn} />}
      <div className='app mx-10'> 


      
      <Navbar setSignIn={setSignIn} signIn={signIn} />

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/property/:id' element= {<PropertyDetails />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={ <CheckOut/>} />
      </Routes>

      
      </div>

    </>
  )
}

export default App
