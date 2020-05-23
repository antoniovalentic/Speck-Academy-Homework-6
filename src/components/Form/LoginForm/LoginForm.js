import React, { useState } from 'react';
// If the component that needs to acces router props is not direct child
// of the Route component, then you need to import and define useHistory.
// After that you can access history so you can programatically go to the
// desired route.
import { useHistory } from 'react-router-dom';

import { loginUser } from '../../../api/login';

import { useForm } from 'react-hook-form';

import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const LoginForm = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        //console.log(data);
    }

    const onSubmit = async (data) =>{
        console.log(data);
        try{
            const result = await loginUser(data);
            
            if (result.token) {
                localStorage.setItem('token', 'Bearer '+result.token);
                history.push('/');
            }else {
                console.log(result);
            }
        } catch(err){
            console.log(err);
        }
    }

    /*
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try{
            const result = await loginUser(data);
            
            if (result.token) {
                localStorage.setItem('token', 'Bearer '+result.token);

                history.push('/');
            }else {
                console.log(result);
            }
        } catch(err){
            console.log(err);
        }
    }
    */

    const loginForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput type="text" id="username" name="username" value={data.username} onChange={handleChange} ref={register({
                    required: {
                        value: true,
                        message: "Username is required",
                    },
                    minLength: {
                        value: 5,
                        message: "Username must be at least 5 characters long",
                    },
                })} />
                {errors.username && <FormInputValidation>{errors.username.message}</FormInputValidation>}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" name="password" value={data.password} onChange={handleChange} ref={register({
                    required: {
                        value: true,
                        message: "Password is required",
                    },
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                    },
                })} />
                {errors.password && <FormInputValidation>{errors.password.message}</FormInputValidation>}
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {loginForm}
        </>
    );
}

export default LoginForm;