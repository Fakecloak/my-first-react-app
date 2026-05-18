import { useState } from "react"

export default function Person(){

    const [person, setPerson] = useState({ name: "John", age: 30 });

    const handleIncreaseAge = () => {
        setPerson( {...person, age: person.age +1});
    };

    const handleNameChange = (e) => {
        setPerson( {...person, name: e.target.value});
    }

    return (
        <>
        <input type="text" value={person.name} placeholder="Enter full name" onChange={handleNameChange}/>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase Age</button>
        </>
    )
    
}
