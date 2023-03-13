import React, { useState } from "react";

function Input() {
    const [textValue, setTextValue] = useState("");

    function onChange(e) {
        setTextValue(e.target.value)
    }
    
    return (
        <div>
            <input type="text" value={textValue} onChange={onChange} />
            <br />
            <p>{textValue}</p>
        </div>
    )
}


export default Input;