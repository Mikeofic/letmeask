import { useState } from "react";

const Button = () => {

const [counter, setCounter] = useState(0);

function increment(){
    setCounter(counter +1);
}

    return(
        <button onClick={increment}>{counter}</button>
    )
}

export default Button