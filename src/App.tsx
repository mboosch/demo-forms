import React, {FormEvent, useState} from 'react';
import './App.css';
import axios from "axios";

type Ant = {
    name: string
    gender: string
    age: number
}

export default function App() {

    const initialState = {
        name: "",
        gender: "",
        age: 0
    }

    const [newAnt, setNewAnt] = useState<Ant>(initialState)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name
        const value = event.target.value
    setNewAnt(  {
        ...newAnt,
        [targetName]: value
        }
    )
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post("input/")
            .then(() => setNewAnt(initialState))
            .catch(error => console.log(error))
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" value={newAnt.name} onChange={onChange}/>
                    <input type="text" name="gender" value={newAnt.gender} onChange={onChange}/>
                    <input type="number" name="age" value={newAnt.age} onChange={onChange}/>
                    <button>abschicken</button>
                </form>
                <p>{newAnt.name}</p>
                <p>{newAnt.gender}</p>
                <p>{newAnt.age}</p>

            </header>
        </div>
    );
}

