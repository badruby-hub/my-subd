import classes from "./ObjTable.module.css"
export function ObjTable({data}) {
  return <div>
  {data.map(obj =><fieldset className={classes.objtable} key={obj.id}>
<legend>id: {obj.id}</legend>
<p>Name: {obj.name}</p>
<p>Email: {obj.email}</p>
<p>Phone: {obj.phone}</p>

  </fieldset>)}
  </div>
}