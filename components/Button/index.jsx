import { useState } from "react";
import classes from "./Button.module.css"
import { ObjTable } from "../ObjTable";


export function ButtonAdd() {
    const [name, setName] = useState(""),
          [email, setEmail] = useState(""),
          [phone, setPhone] = useState("???"),
          [address, setAddress] = useState({city: "???", street: "???", suite: "???"}),
          [company, setCompany] = useState({name: "???"}),
          [error, setError] = useState(null);
    const add = async  ()=> {
        try {
            request = await fetch(`http://localhost:3001/users`,
                {method: "POST", 
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({name,email,phone,address,company}),
            });
            setName("");
            setEmail("");
            setPhone("???");
            setAddress({city: "???", street: "???", suite: "???"});
            setCompany({name: "???"});
            console.log("Пользователь добавлен успешно!");

        } catch (err) {
            setError(err.message);
        }
    }  

    return <form onSubmit={add}>
  <p>
    <label for="name">Name: </label>
    <input value={name}
           onChange={(e) => setName(e.target.value)} placeholder="Введите имя" type="text" />
  </p>
  <p>
    <label for="email">Email: </label>
    <input value={email}
           onChange={(e) => setEmail(e.target.value)} placeholder="Введите почту" type="text"/>
  </p>

  <button  type="submit">добавить пользователя</button>

</form>

}

export function ButtonDel({id}) {
    const [error, setError] = useState(null);
    const delet = async  ()=> {
        try {
            request = await fetch(`http://localhost:3001/users/${id}`,{method: "DELETE"});
        } catch (err) {
            setError(err.message);
        }
    }       
    return <button onClick={delet}>Удалить пользователя</button>
}

