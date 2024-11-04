export function Error({error}) {
    return <div style={{color:'red'}}>
{error.toString()}
    </div>
}