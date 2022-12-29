import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CountrieCard from './components/CountrieCard'
import axios from 'axios'
import Loading from './components/Loading'

function App() {

  const [countries, setCountries] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const URL = 'https://restcountries.com/v2/lang/es'
    axios.get(URL)
        .then(res => {
            setCountries(res.data)
            setIsLoading(false)

        })
        .catch(err => console.log(err))

}, [])

  return (
    <div className="App">
      <h1 className='title'>App Countries</h1>
      {
        isLoading ?
        <Loading /> :
        countries?.map(country => (
          <CountrieCard  
          key={country.name}
          country={country}/>
        ))
      }


      
    </div>
  )
}

export default App
