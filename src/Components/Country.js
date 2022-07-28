import React from 'react'
// import style from "./country.module.css"

const Country = (props) => {
  const {country} = props;
  const {name,flags,capital,population,area} = country


const handleRemoveCountry =(name)=>{

  props.onRemoveCountry(name);
}



  return (
    
      <article>
        <div>
          <img src={flags.png} alt={name.common}/>
          <h3>Name:{name.common}</h3>
          <h3>population:{population}</h3>
          <h3>capital:{capital}</h3>
          <h3>area:{area}</h3>
          <button onClick={()=>{handleRemoveCountry}}>remove country</button>

        </div>
      </article>
   
  )
}

export default Country
