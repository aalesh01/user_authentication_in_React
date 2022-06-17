import React from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button
} from '@chakra-ui/react'

import { AuthContext } from './authContext';
import LoggedIn from './logedIn';


const Login = () => {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const { toggleAuth, isAuth, handleIsAuth } = React.useContext(AuthContext);

    const handleSubmit = () => {
        console.log("From submit" + user)
        handleIsAuth(user);
    }



    return (
        <div>
            <div>
                {isAuth ? <LoggedIn /> : 
                <>
                        <FormControl style={{ width: '50%', margin: "auto" }} >
                            <FormLabel htmlFor='email'>Email address:</FormLabel>
                            <Input id='email' name='email' type='email' onChange={handleChange} />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                            <FormLabel htmlFor='password'>Password:</FormLabel>
                            <Input id="password" name='password' type='password' onChange={handleChange} />
                            <FormHelperText>We'll never share your password.</FormHelperText>
                        </FormControl>
                </>}
            </div>
            <Button onClick={isAuth ? toggleAuth : handleSubmit} colorScheme='blue'>
                {isAuth ? "Logout" : "Login"}
            </Button>

        </div>
    )
}

export default Login;
