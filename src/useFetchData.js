import {useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setPending] = useState(true);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            console.log(JSON.stringify(res));
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setPending(false);
            setData(data);
        })
        .catch((err)=>{
            console.log("Issue with fetching data");
            setPending(false);
        })
    },[url]);

    return {data, isPending}
   
}
 
export default useFetchData;