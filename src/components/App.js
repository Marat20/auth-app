import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGetUsersQuery } from '../redux/usersApi'

export const App = () => {
    const {data = [], isLoading} = useGetUsersQuery();

    if(isLoading) return <h1>Loading...</h1>

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} exact/>
                    <Route path='/register' element={<Register />}/>
                </Routes>
            </Router>
        </>
    )
}