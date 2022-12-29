import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CountrieCard from './components/CountrieCard'
import axios from 'axios'

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
      <h1>App Countries</h1>
      {
        countries?.map(country => (
          <CountrieCard  country={country}/>
        ))
      }


      
    </div>
  )
}

export default App
