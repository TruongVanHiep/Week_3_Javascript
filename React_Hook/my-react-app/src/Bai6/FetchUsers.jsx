import React, { useReducer } from "react";

const initialState = {
    status: "idle",
    data: [],
    error: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                status: "loading",
                error: null,
            };

        case "FETCH_SUCCESS":
            return {
                ...state,
                status: "success",
                data: action.payload,
            };

        case "FETCH_ERROR":
            return {
                ...state,
                status: "error",
                error: action.payload,
            };

        default:
            return state;
    }
}

function FetchUsers() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchUsers = async () => {
        dispatch({ type: "FETCH_START" });
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            dispatch({
                type: "FETCH_SUCCESS",
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: "FETCH_ERROR",
                payload: error.message,
            });
        }
    };

    return (
        <div>
            <h2>Fetch Users</h2>
            {state.status === "idle" && (
                <button onClick={fetchUsers}>Fetch Users</button>
            )}
            {state.status === "loading" && <p>Loading...</p>}
            {state.status === "error" && (
                <div>
                    <p style={{ color: "red" }}>
                        Error: {state.error}
                    </p>
                    <button onClick={fetchUsers}>Retry</button>
                </div>
            )}
            {state.status === "success" && (
                <ul>
                    {state.data.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FetchUsers;
