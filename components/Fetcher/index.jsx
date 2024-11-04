import {useState, useEffect  } from "react";
import { Error } from "@/components/Error";
import { ObjTable } from "../ObjTable";
import { Spinner } from "../Spinner";

export function Fetcher({url}) {
    const 
        [data,setData] = useState(null),
        [error,setError] = useState(null);
useEffect(()=>{
async function go() {
    setData(null);
    setError(null);
       try {
        const
        responce = await fetch(url),
        result = await responce.json();
 
        setData(result);
       } catch (err) {
        setError(err);
       }
};
go();
},[]);
        if(error)return <Error error={error}/>
        if(data)
            return <ObjTable data={data}/>
            return <Spinner/>


}