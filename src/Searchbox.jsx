import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({updateinfo}) {
    let [city, setcity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d627cbb217b81e23d41c581a7f074be7";

    let getweatherinfo = async () => {
        try {
            let resp = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresp = await resp.json();

            let result = {
                city: city,
                temp: jsonresp.main.temp,
                tempmin: jsonresp.main.temp_min,
                tempmax: jsonresp.main.temp_max,
                humidity: jsonresp.main.humidity,
                feelslike: jsonresp.main.feels_like,
                weather: jsonresp.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setcity(evt.target.value);
        seterror(false);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setcity("");
            let newinfo = await getweatherinfo();
            updateinfo(newinfo);
        } catch (err) {
            seterror(true);
        }
    };

    return (
        <div className='Searchbox'>
            <form onSubmit={handleSubmit}>
                {/* Removed the separate heading and used placeholder attribute */}
                <input
                    type="text"
                    placeholder="Enter the city"
                    label="enter the city"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit"  style={{border:"2px solid white",borderRadius:"15px"}}> 
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists!!</p>}
            </form>
        </div>
    );
}
