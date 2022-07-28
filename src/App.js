import React, { useEffect, useState } from 'react'
import Countries from './Components/Countries'
// import "./App.css;"
import Country from './Components/Country'

const url = "https://restcountries.com/v3.1/all"

export default function App() {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setEroor] = useState(null)
    const [countries, setCountries] = useState([])
    const [filteredCountry, setFilterCountry] = useState(countries)



    const fetchData = async(url) =>{
       setIsLoading(true);

       try{
        const res = await fetch(url);
       const data = await res.json();
       setCountries(data);
       setEroor(null);
       setIsLoading(false);
    //    console.log(countries);
       } catch(error){
        setIsLoading(false);
        setEroor(error);
       }
    };
    

    useEffect(()=>{
        fetchData(url);
    },[])

    const handleRemoveCountry =(name)=>{
      const filter = filteredCountry.filter((countries)=> Country.name.common)
    }

  return (
    <div>
      <h1>Country App</h1>
      {isLoading && <p>Data is loading....</p>}
      {error && <p>{error.message}</p>}
      {countries && <Countries countries={countries}
      onRemoveCountry = {handleRemoveCountry}/>}

    </div>
  )
}
