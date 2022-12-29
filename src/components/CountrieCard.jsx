import axios from 'axios'


const CountrieCard = ({country}) => {

    
   

 

    console.log(country);
  return (
    <div className='card__container'>
        <div>
            <img src={country.flags.png} alt="" />
        </div>
        <ul>
            <li>{country.name}</li>
        </ul>
    </div>
  )
}

export default CountrieCard