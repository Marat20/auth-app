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
        <section className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
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