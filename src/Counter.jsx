import { useState } from "react"


export default function Counter() {

    const [count, setCout] = useState(0);

    const Plus = () => {
        const newCount = count + 1;
        setCout(newCount)
    }
    const Minus = () => {
        const newCount = count - 1;
        setCout(newCount);
    }
    return (
        <>
            <h2>Cout: {count}</h2>
            <button onClick={Plus}>Plus</button>
            <button onClick={Minus}>Minus</button>

            <br />
        </>
    )

}