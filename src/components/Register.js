import React from "react";
import { Link } from 'react-router-dom';

export const Register = () => {
    // const {register, handleSubmit, formState: { errors }, reset} = useForm({mode: 'onBlur'});

    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <section className="container">
            <h1>Register</h1>
            <Link to='/'>Login</Link>
            <form action="/">
                <input type='text' placeholder="Name"/>
                <input type='text' placeholder="Age"/>
                <input type='text' placeholder="Email"/>
                <input type='text' placeholder="Password"/>
                <input type='submit'/>
            </form>
        </section>
        )}