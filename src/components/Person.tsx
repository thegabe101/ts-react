import { useState } from "react";

interface Props {
    name: string,
    email: string,
    age: number,
    isMarried: boolean,
    friends: string[],
    country?: string,
    profession?: string[]
}

export enum Country {
    Brazil = 'Brazil',
    Portugal = 'Portugal',
    USA = 'USA'
}

export enum Profession {
    Plumber = 'Plumber',
    Electrician = 'Electrician',
    Athlete = 'Athlete'
}


export const Person = (props: Props) => {
    const [name, setName] = useState<string>();
    const [profession, setProfession]= useState<string>();


    const getProfession = (props: Props) => {
        console.log(props.profession)
        setProfession(Profession.Athlete)
    }

    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person is {props.isMarried ? <h1>married.</h1> : <h1>not married.</h1>}</h1>
            {props.friends.map((e: string) => <h1>{e}</h1>)}
            <h1> {props.country}</h1>
            <button onClick={() => {getProfession(props)}}>What Profession?</button>
            <h1>{props.profession}</h1>
            <h1>{profession}</h1>
        </div>
    )
}