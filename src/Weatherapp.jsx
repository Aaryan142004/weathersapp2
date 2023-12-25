import Searchbox from './Searchbox';
import Infobox from './Infobox';

import { useState } from 'react';
import "./weatherapp.css";
export default function Weatherapp(){
    const [weatherinfo,setweatherinfo]=useState({
        city:"Delhi",
        feelslike:24.48,
        temp: 25,
        tempmin:25.05,
        tempmax:25.05,
        humidity:47,
        weather:"haze",
    });

    
    let updateweatherinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }
    return(

<>
    <div className='conatiner'>
            <Searchbox updateinfo={updateweatherinfo}/>
            <br></br>
        
            <Infobox  info={weatherinfo}/>

        </div>
        </>
    );
}