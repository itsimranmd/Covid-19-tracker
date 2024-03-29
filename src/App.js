import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api'
import covid from './images/Logo.png'

const App = ()=>{
const [data, setData]= useState({});
const [country, setCountry]= useState('');


  useEffect(()=>{
      const fetcheddata = async() =>{
      const response = await fetchData();
      setData(response);
      console.log(response);
    }
       fetcheddata();
  },[]);

  const handleCountryChange = async (country) => {
    console.log(country)
    const data = await fetchData(country);
    console.log(data);
    setData(data)
    setCountry(data);

  }
  console.log(country);
  // console.log(handleCountryChange)
  console.log(data);


return (
  <div className={styles.container}>
    <img className={styles.image} src={covid} alt="COVID-19" />
    <Cards data={data}/>
    <CountryPicker handleCountryChange={handleCountryChange}/>
    <Chart data={data} country={country}/>
  </div>
    );
}

export default App;