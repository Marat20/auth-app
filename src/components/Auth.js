import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Auth = () => {
    const {register, handleSubmit, formState: { errors }, reset} = useForm({mode: 'onBlur'});

    const onSubmit = data => {
        console.log(data);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register('email', {
                    required: 'Заполните форму'
                })}/>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" {...register('password', {
                        required: 'Заполните форму'
                    })}/>
                </div>
            </div>
            <div>{errors?.password && <p>{errors?.password.message || 'Error'}</p>}</div>
            <input type='submit' />
        </form>
    )
}