// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect,useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [countries,setCountries]=useState([])
  // const apiCall=async ()=>{
    
    
  //   try{

  //     const res= await axios.get('https://xcountries-backend.labs.crio.do/all')

  //      if(res.status===200){
  //       setCountries(res.data)
  //     }
  //     else{
  //         console.error("api failed")
  //       return null;
  //     }
  //   }

  //   catch(err){
  //     console.error(err)
  //   }
  
  
  
  // }
  useEffect(()=>{
// apiCall()

const fetchData = async () => {
    try {
      const res = await axios.get('https://xcountries-backend.labs.crio.do/all');
      setCountries(res.data);
    } catch (err) {
      console.error(err);
      return null
    }
  };

  fetchData(); 
 

  },[])

  return (
    <div className='contries-container'>
     
{countries.map(c=><>
<div className='country-container'>
      <img src={c.flag} className="logo vite" alt={c.abbr} />

      <h4>{c.name}</h4>
     </div>

</>)}
    

    </div>
  )
}

export default App
