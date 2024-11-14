
import { ButtonDelSwr } from "@/components/demo/Demo-swr"
import classes from "./SwrObjTable.module.css"


export function ObjTableSwr({data}) {
  return<>
   <div>
  {data.map(obj =><fieldset className={classes.objtable} key={obj.id} data-id={obj.id}>
<legend>id: {obj.id}</legend>
<p>Name: {obj.name}</p>
<p>Email: {obj.email}</p>
<p>Phone: {obj.phone}</p>
<p>Address: {obj.address.city}, {obj.address.street}, {obj.address.suite}</p>
<p>Company: {obj.company.name}</p>
<ButtonDelSwr/>
  </fieldset>)}
  </div>
  </>
}