import { useState } from "react";
import classes from "./Button.module.css"
export function ButtonAdd({id}) {
    return <form action="" method="get">
  <p>
    <label for="name">Name: </label>
    <input placeholder="Введите имя" type="text" />
  </p>
  <p>
    <label for="email">Email: </label>
    <input placeholder="Введите почту" type="email"/>
  </p>
  <button type="submit">добавить пользователя</button>

</form>

}

export function ButtonDel({id}) {
    const [error, setError] = useState(null);
    const delet = async  ()=> {
        try {
            request = await fetch(`http://localhost:3001/users/${id}`,{method: "DELETE"});
        } catch (err) {
            setError(err)
        }
    }       
    return <button onClick={delet}>Удалить пользователя</button>
}