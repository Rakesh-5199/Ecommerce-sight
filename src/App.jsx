import Navbar from './module/navbar'
import Footer from './module/footer'
import Main from './module/main'
import { useState,useEffect } from 'react'
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartvalue, setCartvalue] = useState([]);
  const [carttempvalue, settempCartvalue] = useState([]);
  const onChange =((value)=>{
    if(cartCount <= 8){
      setCartCount(cartCount + 1);

    }
    const temp_arr =[]

    if(value){
      cartvalue.map((ie)=>{
        temp_arr.push(ie)
      })
      temp_arr.push(value)
      setCartvalue(temp_arr)
    }
    
   
        })

    useEffect(()=>{
    
        setCartCount(carttempvalue.length)
        setCartvalue(carttempvalue)
 
     

    },[carttempvalue])
  return (
    <>
      <Navbar
      cartCount ={cartCount}
      cartvalue ={cartvalue}
      settempCartvalue ={settempCartvalue}
      />
      <Main
       onChangefun = {onChange}
      />
      <Footer/>
    </>
  )
}

export default App
