import React, { useState } from "react";

function Input2() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;

    function onChange(e) {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value; <- 이런 식으로 할 경우 상태관리 안됨
        // javacript 에서 object는 heap 메모리에 저장이 됨
        // heap 메모리에 저장된 시점에는 그 저장되어 있는 블록에 대한 참조 주소만 갖게 된다
        // 따라서 heap 메모리의 블록에 있는 데이터의 상태에 대해서는 알지 못한다
        // react에서는 상태를 알 수 있는 방식으로 늘 데이터를 바꿔줘야 한다
        setInputs({
            //깊은 복사, 새로운 object를 만듦
            ...inputs, 
            [id]: value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input id="name" type="text" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input id="email" type="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input id="tel" type="tel" value={tel} onChange={onChange} />
            </div>
            <p>이름: {name}</p>    
            <p>이메일: {email}</p>  
            <p>전화번호: {tel}</p>  
        </div>
    )
}

export default Input2;