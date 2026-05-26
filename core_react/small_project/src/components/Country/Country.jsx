// import { useState } from 'react';
import './Country.css';

export default function Country({country}){
    console.log(country.population)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <p>Name: {country.name.common}</p>
            <p>Population :{country.population.population}</p>
        </div>
    )
}


/**
 * 1. inline css (style object)
 * 2. 
 * 
*/