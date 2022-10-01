import { useEffect, useState } from "react";
import { Card } from "./card";

export const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value); 
        setInput(e.target.value);
    };

    const handleClick = () => {
        setTodo((prev) => [...prev, input]);
    }

    const showTodo = () => {
        return todo.map((item) => 
            <Card id={item.id} title={item.title} userId={item.userId} completed={item.completed} />
        )
    }

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setTodo(result)
                }
            )
            .catch(error => {
                console.log(error);
            })
    }, [])
    

    return(
        <>
            <h1>TODO List</h1>
            {/* <input onChange={handleChange}/>
            <button onClick={handleClick}>Create</button> */}
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}} >
                {showTodo()}
            </div>
        </>
    );
}

