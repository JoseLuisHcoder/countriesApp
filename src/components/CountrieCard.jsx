import axios from 'axios'


const CountrieCard = ({country}) => {

    
   

 

    console.log(country);
  return (
    <div>
        <div>
            <img src={country.flags.png} alt="" />
        </div>
        <ul>
            <li>{country.altSpellings}</li>
        </ul>
    </div>
  )
}

export default CountrieCard