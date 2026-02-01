import React from "react";

function StudentInfo(props) {
    return (
        <div>
            <p>Họ và tên:<strong>{props.name}</strong></p>
            <p>Mssv:<strong>{props.mssv}</strong></p>
            <p>Lớp:<strong>{props.lop}</strong></p>
        </div>
    )
}
export default StudentInfo;