import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { registerUser } from '../../../api/register';

import { useForm } from 'react-hook-form';

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const RegisterForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    const history = useHistory();
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState({
        username: '',
        password: '',
    });

    const onSubmit = (data) =>{
        console.log(data);
        registerUser(data).then(res => {
            if (res.error) {
                setError({
                    password: 'Password too short',
                });
            }
            else if (res.message) {
                setError({
                    username: 'Username already exists',
                });
            }
            else {
                setError({
                    username: '',
                    password: '',
                });
                console.log(res);
                history.push('/login');
            }
        });

    }

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const registerForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
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
                {error.username && <FormInputValidation>{error.username}</FormInputValidation>}
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
                {error.password && <FormInputValidation>{error.password}</FormInputValidation>}
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {registerForm}
        </>
    );
}

export default RegisterForm;