import { useState } from 'react';
import './Country.css';

export default function Country({ country,handleVisitedCountries,handleVisitedFlag}) {

    console.log('Handle visited')

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(visited? false:true)
        handleVisitedCountries(country)
    }

    return (
        //Conditional CSS applied here 
        <div className={`country ${visited&& 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <p>Name: {country.name.common}</p>
            <p>Population :{country.population.population}</p>
            <p>Area:{country.area.area}{
                country.area.area > 300000 ? " (Big country)" : " (Small Country)"
            }</p>
            <button onClick={handleVisited}>{
                visited? "Visited":"Not Visited"
            }</button>
            <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}>
                Add Visited Flag
            </button>
        </div>
    )
}


/**
 * 1. inline css (style object)
 * 2. 
 * 
*/