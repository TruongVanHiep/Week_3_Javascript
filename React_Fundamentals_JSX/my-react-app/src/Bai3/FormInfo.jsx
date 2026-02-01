import React, { useState } from "react";

function Forminfo(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div>
            <h2>Nhập thông tin</h2>
            <input type="text" placeholder="Tên"
                onChange={(e) => {setUsername(e.target.value)}}/> <br />
            <input type="email" placeholder="Email"
                onChange={(e) => {setEmail(e.target.value)}}/>

            <h2>Thông tin của bạn:</h2>
            <p>Tên: <strong>{username}</strong></p>
            <p>Email: <strong>{email}</strong></p>
        </div>
    )
}
export default Forminfo;