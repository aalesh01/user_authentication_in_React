import React from "react";

export const AuthContext = React.createContext();

const AuthContextBox = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState();

    const handleIsAuth = async (user) => {
        await fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then(res => {
                setIsAuth(true)
                console.log(res);
                setToken(res.token);
            })
    }
    const toggleAuth = () => {
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{isAuth,toggleAuth, token, handleIsAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextBox;