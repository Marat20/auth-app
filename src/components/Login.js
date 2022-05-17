import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetUsersQuery } from "../redux/usersApi";
import { v4 as uuidv4 } from 'uuid';

export const Login = () => {
    const {register, handleSubmit, formState: { errors }, reset} = useForm({mode: 'onBlur'});
    const {data, isLoading} = useGetUsersQuery(user);
    const [user, setUser] = useState('');

    const onSubmit = data => {
        const user = {
            ...data, 
            id: uuidv4()
        };
        reset();
    };

    return (
        <section className="container">
        <h1>Login</h1>
        <Link to='/register'>Register</Link>
            <form action="/">
                <input type='text' placeholder="Email"/>
                <input type='text' placeholder="Password"/>
                <input type='submit'/>
            </form>
            <form onSubmit={handleSubmit(onSubmit)} method='POST' action='/'>
                <div className="col-12">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail" {...register('email', {
                            required: 'Заполните форму'
                        })}/>
                    </div>
                </div>
                <div className='col-12'>{errors?.email && <p>{errors?.email.message || 'Error'}</p>}</div>
                
                <div className="col-12">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword" {...register('password', {
                            required: 'Заполните форму'
                        })}/>
                    </div>
                </div>
                <div className='col-12'>{errors?.password && <p>{errors?.password.message || 'Error'}</p>}</div>
                
                <button type="submit" className="btn btn-success">Enter</button>
            </form>
        </section>
    )
}