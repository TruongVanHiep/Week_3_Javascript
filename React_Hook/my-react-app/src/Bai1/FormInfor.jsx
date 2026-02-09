import React, { use, useState } from "react";

function FormInfor() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: "",
    });
    const handle = (e) => {
        // const { name, value } = e.target;
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    return (
        <div>
            <h2>Form thông tin người dùng</h2>
            <strong>Name:<input type="text" name='name' value={user.name} onChange={handle} /></strong> <br />
            <strong>Email:<input type="text" name='email' value={user.email} onChange={handle} /></strong> <br />
            <strong>Age:<input type="text" name='age' value={user.age} onChange={handle} /></strong> <br />
            <h2>Thông tin người dùng</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>

    )
}
export default FormInfor;