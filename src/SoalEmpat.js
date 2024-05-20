import React, { useEffect, useState } from "react";

function SoalEmpat() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Why You Click The Button", count);
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Don't Click Me</button>
        </div>
    )
}

export default SoalEmpat;