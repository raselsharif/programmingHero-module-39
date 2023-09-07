import { useState } from "react"


export default function Team() {

    const [team, setTeam] = useState(11);
    const Add = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const Remove = () => {
        setTeam(team - 1)
    }

    return (
        <>
            <h2>Player: {team}</h2>
            <button onClick={Add}>Add</button>
            <button onClick={Remove}>Remove</button>
        </>
    )
}