
import classes from "./SwrObjTable.module.css"


export function ObjTableSwr({data}) {
  return<>
   <table className={classes.objtable}>
   <thead>
      <tr>
        <th>
          id
        </th>
        <th>
          name
        </th>
        <th>
          email
        </th>
        <th>
          phone
        </th>
        <th>
          address
        </th>
        <th>
          company
        </th>
        <th>
        action
        </th>
        </tr>
</thead>
<tbody >
{data.map(obj =>
  <tr key={obj.id} data-id={obj.id}>
<th> {obj.id}</th>
<td> {obj.name}</td>
<td> {obj.email}</td>
<td> {obj.phone}</td>
<td> {obj.address.city}, {obj.address.street}, {obj.address.suite}</td>
<td> {obj.company.name}</td>
<td><button data-action={'del'}>Удалить пользователя</button></td>
</tr>)}
  </tbody>
  </table>
  </>
}