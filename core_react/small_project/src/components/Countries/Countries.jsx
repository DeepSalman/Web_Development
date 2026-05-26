import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

export default function Countries({countriesPromise}){

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;


    return(
        <div>
            <p>Total Countries :{countries.length}</p>
            {
                countries.map(country=><Country country={country}></Country>)
            }
        </div>
    )
}