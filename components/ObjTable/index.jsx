import { ButtonAdd, ButtonDel } from "../Button"
import classes from "./ObjTable.module.css"
export function ObjTable({data}) {
  return<>
  <ButtonAdd/>
   <div>
  {data.map(obj =><fieldset className={classes.objtable} key={obj.id}>
<legend>id: {obj.id}</legend>
<p>Name: {obj.name}</p>
<p>Email: {obj.email}</p>
<p>Phone: {obj.phone}</p>
<p>Address: {obj.address.city}, {obj.address.street}, {obj.address.suite}</p>
<p>Company: {obj.company.name}</p>
<ButtonDel id={obj.id}/>
  </fieldset>)}
  </div>
  </>
}