import useSwr from "swr";
import toast from "react-hot-toast";
import { Error } from "@/components/Error";
import { ObjTableSwr } from "@/components/SwrObjTable";



const 
   API_URL = "http://localhost:3001/users",
   fetcher = async ()=> {
    const
        response = await fetch(API_URL);
        if(!response.ok) throw new Error('fetch' + response.status);
        return await response.json();
   };


export function DemoSwr() {
    const 
        {data,error,isLoading, isValidating,mutate} = useSwr(API_URL,fetcher, {revalidateOnFocus:false}),
        onClick = async event =>{
            const
            action = event.target.closest('[data-action]')?.dataset?.action,
            id = +event.target.closest('[data-id]')?.dataset?.id;
            console.log('onClick:', {action,id})
            if(!action)return;
            let optimisticData;
            const 
             getPromise = ()=>{
                switch (action) {
                    case 'del':
                    optimisticData = data.filter(el=> String(el.id) !== id);
                    return fetch(API_URL + '/' + id, {method: 'DELETE'})
                    .then( res => {
                        if(!res.ok){
                            throw (new Error(res.status + ' ' + res.status))
                        }
                    });
                }
             },
             promise = getPromise();
            if(promise){
                toast.promise(promise,{
                    loading: "Fetching" + action,
                    success: "ok",
                    error: (err)=> `${err.toString()}`,
                });
               await mutate(promise.then(async ()=>optimisticData,fetcher),{optimisticData})
            }
        }
    return <>
    <div style={{position:'absolute', fontSize:'xxx-large'}}>
        {isLoading && '⌛'}
        {isValidating && '👁️'}
    </div>
    {error &&  <Error error={error}/>}
    <fieldset onClick={onClick}>
    {data && <ObjTableSwr data={data}/>}
    </fieldset>
    </>
}



