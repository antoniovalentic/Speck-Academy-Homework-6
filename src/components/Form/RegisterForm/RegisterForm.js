import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { registerUser } from '../../../api/register';

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
    const history = useHistory();
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        registerUser(data).then(res => {
            if (res.error) {
                setError('Password too short');
            }
            else if (res.message) {
                setError('Username already exists');
            }
            else {
                setError('');
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
        <Form onSubmit={handleSubmit}>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    required />
                {error && <FormInputValidation>{error}</FormInputValidation>}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required />
                <FormInputValidation></FormInputValidation>
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