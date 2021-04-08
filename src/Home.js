import {useState , useEffect} from 'react';
import useFetchData from './useFetchData';
import Birthdays from './Birthdays';

const Home = () => {

    const {data, isPending} = useFetchData('http://localhost:5000/data');

    return ( 
        <div className="mainpage">
            <h1>View all birthdays for today </h1> 
            <br></br>
            {isPending && <div>Loading...</div>}
            {data && <Birthdays data={data} title="List of birthdays"/>}
        </div> 
    );
}
 
export default Home;